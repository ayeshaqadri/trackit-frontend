import React from 'react';
import TaskColumn from './TaskColumn';

const TaskBoard = ({ tasks, onDelete, onUpdate }) => {
  const statuses = ["To Do", "In Progress", "Done"];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {statuses.map((status) => (
        <TaskColumn
          key={status}
          title={status}
          tasks={tasks.filter(task => task.status === status)} // Filter tasks by status
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
};

export default TaskBoard;
