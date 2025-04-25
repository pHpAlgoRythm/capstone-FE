import React, { useState, useEffect } from 'react';
import RequesterDetails from '../services/RequesterDetails';
import RoutingMap from './RoutingMap';
import ImagePreview from './ImagePreview';
import { Button } from '@mui/material';
const EmergencyDetails = ({ details, from }) => {
  const [requesterId, setRequesterId] = useState(null);
  const [to, setTo] = useState([]);
  const [imgData, setImgData] = useState();
  const [viewLocation, setVewLocation] = useState(false)
  useEffect(() => {
    if (details) {
      console.log(details);
      setRequesterId(details.user_id);
      setTo([details.latitude, details.longitude]);
      setImgData(details.request_photo);
    }
  }, [details]);
  return (
    <>
      {requesterId ? (
        <div className="rounded-lg shadow-[0px_0px_12px_-4px_rgba(0,_0,_0,_0.7)] mx-2  mt-10">
          <div className="p-2">
            <RequesterDetails userId={requesterId} />
            <div className="p-2">
              <ImagePreview imageData={imgData} />
            </div>

            <div className='flex justify-end mt-2 m-2'>
              <Button
                variant='contained' onClick={() => setVewLocation(true)} >View location</Button>
            </div>
          </div>

          {viewLocation && (
            <div className=" w-screen h-screen fixed top-0 left-0 flex flex-col justify-center items-center bg-green-400 p-2 ">
              <RoutingMap to={to} from={from} />
              <button className='absolute top-20 left-0 bg-green-600 p-1 rounded-sm  z-2000' onClick={() => setVewLocation(false)} >Hide</button>
            </div>
          )}
        </div>

      ) : (
        <div className="">
          No task yet
        </div>
      )
      }
    </ >


  );
};

export default EmergencyDetails;
