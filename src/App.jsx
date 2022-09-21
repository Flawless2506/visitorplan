import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';

import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import"./App.css";
import { findAllByDisplayValue } from '@testing-library/react';




const App = () => {
 
 const [tasks, setTasks] = useState([
  
  {
      id: '1',
      title: 'Estudar programação',
      completed: false,
      
  },
  {
      id: '2',
      title: 'jogar computador',
      completed: true,

  },

  {
    id: '3',
    title: 'Pinar',
    completed: true,

},
    
 ]);

 const handleTaskClick = (taskID)=>{
    const newTasks = tasks.map((task) => {

        if (task.id === taskID) return {...task, completed: !task.completed}

        return task;

    });
    
    setTasks(newTasks);

 }

  const handleTaskAddition =(taskTitle) =>{
    const newTasks =[
      ...tasks,
      {
        title:taskTitle,
        id: uuidv4(),
        completed: false,
      },
    ];

    setTasks(newTasks);
  }

  const handleTaskDeletion = (taskID) =>
  {

    const newTasks = tasks.filter((task)=> task.id != taskID);
    setTasks(newTasks);

  }

  return (
  <>
  <div className='container'>
    <AddTask handleTaskAddition={handleTaskAddition}/>

    <Tasks tasks={tasks} handleTaskClick={handleTaskClick}/>
  </div>
  
  </>
  );
};
export default App;