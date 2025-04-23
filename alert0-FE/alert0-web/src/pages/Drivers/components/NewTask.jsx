import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button
} from '@mui/material';

import NewTaskApi from '../services/NewTaskApi';

const NewTask = () => {
  const [taskData, setTaskData] = useState(null);

  const handleNewtask = async () => {
    try {
      const tasks = await NewTaskApi();
      console.log("Full Task Data:", tasks);
      setTaskData(tasks);
    } catch (error) {
      console.error("Error fetching task:", error);
    }
  };
  

  const latitude = taskData?.newTask?.[0]?.alert_request?.latitude;
  const longitude = taskData?.newTask?.[0]?.alert_request?.longitude;

  const googleMapUrl = latitude && longitude
    ? `https://www.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`
    : '';

      
  return (
    <div>
     
      <Dialog fullWidth maxWidth="md">
        <DialogTitle>Task Location</DialogTitle>
        <DialogContent>
          {googleMapUrl ? (
            <iframe
              src={googleMapUrl}
              width="100%"
              height="400"
              allowFullScreen
              loading="lazy"
              style={{ border: 0 }}
              title="Google Maps Location"
            />
          ) : (
            <p>Loading map...</p>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default NewTask;
