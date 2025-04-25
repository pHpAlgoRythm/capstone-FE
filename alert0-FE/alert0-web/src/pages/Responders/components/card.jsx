import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTitle, Button, fabClasses } from '@mui/material';


const TaskCard = ({ task, onRespond }) => {

    console.log(task.drivers_response)

    const handleUpdateStatus = async ()=>{

        const id = task.id
        const driverStatus = task.drivers_response

       

       
            const response =  await fetch(`http://127.0.0.1:8000/api/updateResponderResponse/${id}`,{
                method: 'PUT',
                headers: {
                     'Content-Type': 'application/json',
                     'Accept': 'application/json'
                    }
            })

            const data = await response.json();
            console.log('Status response:', data);
       

    }



  const [open, setOpen] = useState(true);

  const requestDetails = task.alert_request;

  const handleClose = () => {
    onRespond(requestDetails);
    setOpen(false);
    handleUpdateStatus();
  };

  return (
    <Dialog open={open}>
      <DialogTitle>New Task</DialogTitle>
      <DialogContent>
        <div className='flex gap-1'>
          <h1>Good Day!</h1><h1><strong>{task?.driver.name}</strong></h1>
        </div>
        <h3>You have a new task. Please respond immediately!</h3>
        <div className='flex justify-end'>
          <Button variant='contained' onClick={handleClose}>Respond</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};


export default TaskCard;
