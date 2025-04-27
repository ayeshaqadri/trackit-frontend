import React from 'react';
import TaskCard from './TaskCard'; // Import TaskCard

const TaskBoard = ({ tasks = [], onDelete, onUpdate }) => {
  const statuses = ["To Do", "In Progress", "Done"];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {statuses.map((status) => {
        // Filter tasks by the current status
        const filteredTasks = tasks.filter(task => task.status === status);
        
        return (
          <div key={status} className="task-column">
            <h2 className="text-2xl font-bold mb-4">{status}</h2>
            {filteredTasks.length === 0 ? (
              <p>No tasks in this column</p>
            ) : (
              filteredTasks.map(task => (
                <TaskCard
                  key={task.id}
                  task={task}
                  onDelete={onDelete}
                  onUpdate={onUpdate}
                />
              ))
            )}
          </div>
        );
      })}
    </div>
  );
};

export default TaskBoard;
