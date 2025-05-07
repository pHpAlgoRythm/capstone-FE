import React, { useEffect, useState } from "react"
import RequesterDetails from "../../Drivers/services/RequesterDetails";
import PatientCareReport from "../../Responders/components/PatientCareReport";

const ResponseDetails = ({details}) => {

  const [requesterId, setRequesterId] = useState(null);
   
  useEffect( ()=> {
    if(details){
      setRequesterId(details.alert_request.user_id)
    }
  }, [details])

  return (
    <>
       {requesterId ? (
            <div>
              <div>
                <h1>Requested From</h1>
              </div>
                <RequesterDetails userId={requesterId} />
                <PatientCareReport details={details} />
            </div>
       ) : (
          <div> 
              No Task Yet
          </div>
       )
       }
    </>
  )
}

export default ResponseDetails
