import React from 'react';

const TaskBoard = ({ tasks, onDelete, onUpdate }) => {
  return (
    <div>
      <div className="flex">
        <div className="w-1/3">
          <h3 className="text-lg font-semibold">To Do</h3>
          {tasks
            .filter((task) => task.status === 'To Do')
            .map((task) => (
              <div key={task.id} className="task-card">
                <h4>{task.title}</h4>
                <p>Assigned: {task.assignedTo}</p>
                <button onClick={() => onUpdate(task.id, { status: 'In Progress' })}>
                  Move to In Progress
                </button>
                <button onClick={() => onDelete(task.id)}>Delete</button>
              </div>
            ))}
        </div>

        <div className="w-1/3">
          <h3 className="text-lg font-semibold">In Progress</h3>
          {tasks
            .filter((task) => task.status === 'In Progress')
            .map((task) => (
              <div key={task.id} className="task-card">
                <h4>{task.title}</h4>
                <p>Assigned: {task.assignedTo}</p>
                <button onClick={() => onUpdate(task.id, { status: 'Done' })}>
                  Move to Done
                </button>
                <button onClick={() => onDelete(task.id)}>Delete</button>
              </div>
            ))}
        </div>

        <div className="w-1/3">
          <h3 className="text-lg font-semibold">Done</h3>
          {tasks
            .filter((task) => task.status === 'Done')
            .map((task) => (
              <div key={task.id} className="task-card">
                <h4>{task.title}</h4>
                <p>Assigned: {task.assignedTo}</p>
                <button onClick={() => onDelete(task.id)}>Delete</button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TaskBoard;
