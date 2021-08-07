import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import List from './components/List';
import Form from './components/Form';

function App() {
  const [lists, setLists] = useState([
    {
      id: 1,
      text: 'grocery shopping',
      reminder: false,
      day: 'June 8, 2021'
    },
    {
      id: 2,
      text: 'go to the gym and exercise',
      reminder: false,
      day: 'Feb 3, 2021'
    },
    {
      id: 3,
      text: 'go to work',
      reminder: false,
      day: 'Nov 21, 2021'
    }, 
  ])

  // Add task
  const addTask = (list) => {
    const id = Math.floor(Math.random() * 10000) + 1
    console.log(id);
    const newTask = { id, ...list }
    setLists([...lists, newTask])
  }

  // Delete tasks
  const deleteTask = (id) => {
    setLists(lists.filter((list) => list.id !== id))
  }

  // Toggle reminder
  const toggleReminder = (id) => {
    setLists(lists.map((list) => list.id === id ? { ...list, reminder: !list.reminder } : list))
  }
  return (
    <div className='container'>
      <header>
        <Header />
        <Form onAdd={addTask} />
        <List lists={lists} onDelete={deleteTask} onToggle={toggleReminder} />
      </header>
    </div>
  );
}


export default App;
