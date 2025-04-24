import React, { useState, useEffect } from 'react';
import { CircularProgress } from '@mui/material';

const RequesterDetails = ({ userId }) => {
  const [name, setName] = useState('');
  const [conNum, setConNum] = useState();
  const [emailAdd, setEmailAdd] = useState();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/getSpecificUser/${userId}`);
        const data = await response.json();

        if (response.ok) {
            console.log(data)
          setName(data.data.name);
          setConNum(data.data.phone)
          setEmailAdd(data.data.email)
        } else {
          console.error("Failed to fetch user", data.message);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    if (userId) {
      fetchUser();
    }
  }, [userId]); 

  return (
    <div className='w-full'>

        <fieldset className="border border-black p-4 rounded text-black my-4">
            <legend className="px-2 text-lg font-semibold">Requester Information</legend>
            <h1>Name : {name ? name : <CircularProgress size={20} />}</h1>
            <h1>Contact number : {conNum ? conNum : <CircularProgress size={20} />} </h1> {/*butangi lang di spinner or ano nga mga loading element*/}
            <h1>Email Address : {emailAdd ? emailAdd : <CircularProgress size={20} />}</h1>
        </fieldset>
    </div>
  );
};

export default RequesterDetails;
