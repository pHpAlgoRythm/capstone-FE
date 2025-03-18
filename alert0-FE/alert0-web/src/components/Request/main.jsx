
import { useState,useEffect } from "react";

const Request = ({CarType}) => {
  const [fullname,setFullname] = useState('');

  useEffect(() => {
      setFullname(localStorage.getItem('fullName'));
  },[])

  // const [data,setData] = useState(null)
  // const [error,setError] = useState(null)

  // useEffect(() => {
  //     const fetchData =  async () => {
  //     localStorage.getItem('userId');
  //     localStorage.getItem('fullName');
  //     try {
  //       const response = await fetch('http://127.0.0.1:8000/api/displaySystemPhoto', {
  //         method: 'GET',
  //         headers: {'Content-type': 'application/json'},
  //       });
        
  //     if (!response.ok) throw new Error("Failed to fetch data");
  //     const result = await response.json();
  //     setData(result)

  //   } catch (error) {
  //       setError(error.message)
  //   }
   
  //   };
  //   fetchData();
  // },[]
  // )
    return (
      <>
      <form action="">
      <div className="flex justify-between items-center">
      <p className="m-0">Requester:</p><input type="text" readOnly value={fullname} className="outline-none" />
      </div>
       
      </form>
  
      </>
    )
}

export default Request;