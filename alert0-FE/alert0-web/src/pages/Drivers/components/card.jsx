import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTitle, Button, fabClasses } from '@mui/material';
import EmergencyDetails from './EmergencyDetails';

const TaskCard = ({ task, onRespond }) => {
  const [open, setOpen] = useState(true);

  const requestDetails = task.alert_request;

 

  const handleClose = () => {
    onRespond(requestDetails); 
    setOpen(false);
  };

  return (
    <Dialog open={open}>
      <DialogTitle>New Task</DialogTitle>
      <DialogContent>
        <div className='flex gap-1'>
          <h1>Good Day!</h1><h1><strong>{task?.driver.name}</strong></h1>
        </div>
        <h3>You have a new task. Please respond immediately!</h3>
        
        <Button variant='contained' className='translate-x-60 translate-y-2' onClick={handleClose}>Respond</Button>
      </DialogContent>
    </Dialog>
  );
};


export default TaskCard;
