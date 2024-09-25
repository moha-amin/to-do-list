import { useState } from 'react';

const TaskItem = ({ task, onDelete, onEdit, onToggleStatus }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task.text);
  const [editedDueDate, setEditedDueDate] = useState(task.dueDate);

  const handleEdit = () => {
    onEdit(task.id, editedTask, editedDueDate);
    setIsEditing(false);
  };

  return (
    <div className="d-flex justify-content-between align-items-center p-2 border-bottom">
      {isEditing ? (
        <>
          <input 
            type="text" 
            value={editedTask} 
            onChange={(e) => setEditedTask(e.target.value)} 
            className="form-control"
          />
          <input 
            type="datetime-local" 
            value={editedDueDate} 
            onChange={(e) => setEditedDueDate(e.target.value)} 
            className="form-control mx-2"
          />
        </>
      ) : (
        <span className={`flex-grow-1 ${task.isDone ? 'text-decoration-line-through' : ''}`}>
          {task.text} - Due: {new Date(task.dueDate).toLocaleString()}
        </span>
      )}

      <div className="task-actions">
        <button onClick={() => onToggleStatus(task.id)} className="btn btn-info mx-1">
          {task.isDone ? 'Undo' : 'Done'}
        </button>
        {isEditing ? (
          <button onClick={handleEdit} className="btn btn-success mx-1">
            <i className="fa fa-save"></i> Save
          </button>
        ) : (
          <>
            <button onClick={() => setIsEditing(true)} className="btn btn-warning mx-1">
              <i className="fa fa-edit"></i> Edit
            </button>
            <button onClick={() => onDelete(task.id)} className="btn btn-danger mx-1">
              <i className="fa fa-trash"></i> Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TaskItem;
