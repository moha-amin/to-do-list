import { useState, useEffect } from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  const addTask = (text, dueDate) => {
    const newTask = { id: Date.now(), text, dueDate, isDone: false };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter(task => task.id !== id));
  };

  const editTask = (id, newText, newDueDate) => {
    setTasks((prevTasks) =>
      prevTasks.map(task => (task.id === id ? { ...task, text: newText, dueDate: newDueDate } : task))
    );
  };

  const toggleTaskStatus = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map(task => (task.id === id ? { ...task, isDone: !task.isDone } : task))
    );
  };

  return (
    <div className="app-container">
      <h1><span>T</span><span>O</span><span>D</span><span>O</span><span></span> <span>L</span><span>I</span><span>S</span><span>T</span><span>!</span></h1>
      <AddTask onAdd={addTask} />
      <TaskList 
        tasks={tasks} 
        onDelete={deleteTask} 
        onEdit={editTask} 
        onToggleStatus={toggleTaskStatus} 
      />
    </div>
  );
};

export default App;
