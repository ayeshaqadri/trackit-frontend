import React, { useState } from "react";

const TaskCard = ({ task, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDesc, setEditedDesc] = useState(task.description);

  const handleSave = () => {
    onUpdate(task.id, {
      title: editedTitle,
      description: editedDesc,
      status: task.status
    });
    setIsEditing(false);
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-lg border border-purple-200">
      {isEditing ? (
        <>
          <input
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            className="w-full bg-white border border-purple-300 rounded-lg p-2 text-gray-800 mb-2"
          />
          <textarea
            value={editedDesc}
            onChange={(e) => setEditedDesc(e.target.value)}
            className="w-full bg-white border border-purple-300 rounded-lg p-2 text-gray-800"
          />
        </>
      ) : (
        <>
          <h3 className="text-lg font-medium text-gray-800">{task.title}</h3>
          <p className="text-gray-600 mt-1">{task.description}</p>
        </>
      )}

      <select
        value={task.status}
        onChange={(e) => onUpdate(task.id, { status: e.target.value })}
        className="w-full mt-2 bg-white border border-purple-300 text-gray-800 rounded-lg p-2"
      >
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>

      <div className="flex justify-between mt-4">
        {isEditing ? (
          <button onClick={handleSave} className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600">
            Save
          </button>
        ) : (
          <button onClick={() => setIsEditing(true)} className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600">
            Edit
          </button>
        )}
        <button onClick={() => onDelete(task.id)} className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;