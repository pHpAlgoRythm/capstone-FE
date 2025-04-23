import React, { useState, useEffect } from 'react';
import DriversHeader from './components/header';
import NewTaskApi from './services/NewTaskApi';
import TaskCard from './components/card';
import { io } from 'socket.io-client';

const DriversDashboard = () => {
  const socket = io("http://127.0.0.1:8080"); 
  const myId = localStorage.getItem('userID');
  const [matchedTask, setMatchedTask] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await NewTaskApi();
        const tasks = response?.newTask || []; 
        
        const match = tasks.find(task => String(task.drivers_id) === String(myId));
        if (match) {
          setMatchedTask(match);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchTasks();

    socket.on('responded', () => {
      console.log('Received responded event from server');
      fetchTasks(); 
    });

    return () => {
      socket.disconnect();
    };
  }, []); 

  return (
    <div className='bg-black'>
      <DriversHeader />
      {matchedTask && <TaskCard task={matchedTask} />}
      {/* <BottomNav /> */}
    </div>
  );
};

export default DriversDashboard;
