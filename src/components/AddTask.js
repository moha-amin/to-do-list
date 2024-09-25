// src/components/AddTask.js
import { useState } from 'react';

const AddTask = ({ onAdd }) => {
  const [task, setTask] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate task input
    if (!task.trim()) {
      alert("Task cannot be empty");
      return;
    }
    // Validate due date
    if (!dueDate) {
      alert("Please select a due date");
      return;
    }
    onAdd(task, dueDate);
    setTask('');
    setDueDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex justify-content-between mb-3">
      <input 
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        placeholder="Add a new task" 
        className="form-control mr-2"
      />
      <input 
        type="datetime-local" 
        value={dueDate} 
        onChange={(e) => setDueDate(e.target.value)} 
        className="form-control mr-2"
      />
      <button type="submit" className="btn btn-primary">
        <i className="fa fa-plus"></i> Add Task
      </button>
    </form>
  );
};

export default AddTask;
