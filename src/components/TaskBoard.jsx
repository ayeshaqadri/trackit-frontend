import React from 'react';
import TaskColumn from './TaskColumn';

const TaskBoard = ({ tasks = [], onDelete, onUpdate }) => {
  const columns = [
    { title: "To Do", status: "To Do" },
    { title: "In Progress", status: "In Progress" },
    { title: "Completed", status: "Done" }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-gradient-to-b from-purple-50 to-white min-h-screen">
      {columns.map(col => (
        <TaskColumn 
          key={col.status}
          title={col.title}
          tasks={tasks.filter(t => t.status === col.status)}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
};

export default TaskBoard;