import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';

const TaskCard = ({ task }) => {
  const [open, setOpen] = useState(true);


  return (
    <Dialog open={open}>
      <DialogTitle>New Task</DialogTitle>
      <DialogContent>
        <div className='flex gap-1'>
          <h1>Good Day!</h1><h1><strong>{task?.driver.name}</strong></h1>
        </div>
        <h3>You have a new task. Please respond immediately!</h3>
        
        {/* Add more task details here if needed */}
      </DialogContent>
    </Dialog>
  );
};

export default TaskCard;
