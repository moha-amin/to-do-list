import TaskItem from './TaskItem';

const TaskList = ({ tasks, onDelete, onEdit, onToggleStatus }) => {
  return (
    <div className="task-list mt-4">
      {tasks.length === 0 ? (
        <p className="text-center">No tasks available. Please add a task.</p>
      ) : (
        tasks.map((task) => (
          <TaskItem 
            key={task.id} 
            task={task} 
            onDelete={onDelete} 
            onEdit={onEdit} 
            onToggleStatus={onToggleStatus} 
          />
        ))
      )}
    </div>
  );
};

export default TaskList;
