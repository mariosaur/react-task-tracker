import{useState} from 'react'
import React from 'react';
import Header from './components/Header'
import Tasks from './components/Tasks';



const App = () => {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "Doctor",
        day:  'Feb 5th at 2:40',
        reminder: true,
    }, 
    {
        id: 2,
        text: "Meeting at school",
        day: 'Feb 6th at 3:00',
        reminder: true,
    },
    {
        id: 3,
        text: "Coffee",
        day: 'Feb 8th at 4:00',
        reminder: false,
    }
])
  return (
    <div className='container'>
      <Header></Header>
      <Tasks tasks={tasks}></Tasks>
    </div>
  )
}

export default App;
