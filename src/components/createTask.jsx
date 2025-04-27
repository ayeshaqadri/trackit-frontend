import React, { useState } from 'react';

const CreateTask = ({ addTask }) => {
  const [taskData, setTaskData] = useState({
    title: '',
    description: '',
    status: 'To Do',
  });

  const handleChange = (e) => {
    setTaskData({ ...taskData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(taskData);
    setTaskData({ title: '', description: '', status: 'To Do' });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-8">
      <input
        type="text"
        name="title"
        placeholder="Task Title"
        value={taskData.title}
        onChange={handleChange}
        className="border p-2 rounded"
        required
      />
      <textarea
        name="description"
        placeholder="Task Description"
        value={taskData.description}
        onChange={handleChange}
        className="border p-2 rounded"
        required
      />
      <select
        name="status"
        value={taskData.status}
        onChange={handleChange}
        className="border p-2 rounded"
      >
        <option>To Do</option>
        <option>In Progress</option>
        <option>Done</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
        Add Task
      </button>
    </form>
  );
};

export default CreateTask;
