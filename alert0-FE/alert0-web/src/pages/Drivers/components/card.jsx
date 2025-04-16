import React, { useState } from 'react'
import { Button } from '@mui/material'
const TaskCard = () => {
    const [istask,setIsTask] = useState(false)
  return (
    <div className='border h-screen w-screen p-2'>
        <div className='mx-auto  h-fit w-full bg-white shadow-lg p-2 rounded-lg'>
           <p>Requster: <strong>max</strong>  </p>
           <p>Location: <strong>brgy3</strong> </p>
           <p>Type:  <strong>Ambulance</strong> </p>
           <br />
            <div className='flex justify-end   gap-1'>
            {/* <Button variant='contained' color='secondary'>View location</Button> */}
                <Button variant='contained' color='success'>Accept</Button>
            </div>
        </div>
    </div>
  )
}

export default TaskCard;