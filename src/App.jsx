import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import CreateTask from './components/createTask';
import TaskBoard from './components/TaskBoard';
import Toast from './components/Toast';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './components/Navbar';
import UserProfile from './components/UserProfile';
import Dashboard from './pages/Dashboard'

function App() {
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [toast, setToast] = useState(null);

  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const addTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: Date.now() }]);
    showToast("Task added successfully!", "success");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
    showToast("Task deleted!", "error");
  };

  const updateTask = (id, updatedTask) => {
    setTasks(
      tasks.map(task => (task.id === id ? { ...task, ...updatedTask } : task))
    );
    showToast("Task updated successfully!", "warning");
  };

  return (
    <Router>
      <Navbar />
      <div className="min-h-screen bg-[#f0f4f8] p-6">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Track Your Tasks</h1>
          <p className="text-gray-600 mt-2">Manage your tasks with style and ease</p>
        </header>

        <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-2xl">

        <Routes>
  <Route path="/" element={<Navigate to="/login" />} />
  <Route path="/login" element={<Login setUser={setUser} />} />
  <Route path="/register" element={<Register />} />
  <Route path="/task-board" element={
    <>
      <CreateTask addTask={addTask} />
      <div className="mt-8">
        <TaskBoard
          tasks={tasks}
          onDelete={deleteTask}
          onUpdate={updateTask}
        />
      </div>
    </>
  } />
  <Route path="/profile" element={<UserProfile user={user} />} />
  <Route path="/dashboard" element={<Dashboard />} />
</Routes>
        </div>

        {toast && <Toast message={toast.message} type={toast.type} />}
      </div>
    </Router>
  );
}

export default App;
