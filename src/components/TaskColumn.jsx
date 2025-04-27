import React from 'react';
import TaskCard from './TaskCard';

const TaskColumn = ({ title, tasks, onDelete, onUpdate }) => {
  return (
    <div className="bg-purple-50 p-4 rounded-xl shadow-md border border-purple-100">
      <h2 className="text-xl font-semibold text-purple-800 mb-4">{title}</h2>
      <div className="space-y-4">
        {tasks.length > 0 ? (
          tasks.map(task => (
            <TaskCard 
              key={task.id} 
              task={task} 
              onDelete={onDelete} 
              onUpdate={onUpdate} 
            />
          ))
        ) : (
          <p className="text-purple-400 text-center py-4">No tasks here</p>
        )}
      </div>
    </div>
  );
};

export default TaskColumn;