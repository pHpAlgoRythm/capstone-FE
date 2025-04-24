import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTitle, Button } from '@mui/material';

const TaskCard = () => {
    const [open, setOpen] = useState(true);
    return (
        <Dialog open={open}>
            <DialogTitle>New Task</DialogTitle>
            <DialogContent>
                <div className='flex gap-1'>
                    <h1>Good Day!</h1><h1><strong>john doe</strong></h1>
                </div>
                <h3>You have a new task. Please respond immediately!</h3>
                <div className='flex justify-end '>
                    <Button variant='contained'>View</Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default TaskCard;
