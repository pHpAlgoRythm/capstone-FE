import React, { useState, useEffect } from 'react';
import RequesterDetails from '../services/RequesterDetails';
import RoutingMap from './RoutingMap';
import ImagePreview from './ImagePreview';

const EmergencyDetails = ({ details, from }) => {
  const [requesterId, setRequesterId] = useState(null);
  const [to, setTo] = useState([]);
  const [imgData, setImgData] = useState();

  useEffect(() => {
    if (details) {
      console.log(details);
      setRequesterId(details.user_id);
      setTo([details.latitude, details.longitude]);
      setImgData(details.request_photo);
    }
  }, [details]);

  return (
    <div className="w-[90%] max-w-6xl h-[80vh] bg-white rounded-2xl shadow-2xl p-6 mx-auto mt-6">
      {requesterId ? (
        <div className="flex flex-col md:flex-row h-full gap-6">
       
          <div className="md:w-1/2 w-full flex flex-col gap-4 border border-gray-300 rounded-xl p-4 bg-gray-50 shadow-inner">
            
            <RequesterDetails userId={requesterId} />
            <div className="flex flex-col items-start gap-2">
                <h3 className="text-md font-medium text-gray-700">Submitted Emergency Image</h3>
                <ImagePreview imageData={imgData}/>
            </div>
          </div>

         
          <div className="md:w-1/2 w-full h-full rounded-xl overflow-hidden shadow">
            <RoutingMap to={to} from={from} />
          </div>
        </div>
      ) : (
        <div className="text-center text-gray-500 text-lg py-10">
          No task yet
        </div>
      )}
    </div>
  );
};

export default EmergencyDetails;
