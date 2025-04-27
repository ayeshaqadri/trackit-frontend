import React, { useState } from "react";

const TaskCard = ({ task, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDescription, setEditedDescription] = useState(task.description);
  const [editedStatus, setEditedStatus] = useState(task.status);

  const handleSave = () => {
    onUpdate(task.id, {
      title: editedTitle,
      description: editedDescription,
      status: editedStatus,
    });
    setIsEditing(false);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md space-y-4">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Edit title"
          />
          <textarea
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Edit description"
          ></textarea>
        </>
      ) : (
        <>
          <h3 className="text-xl font-bold text-gray-800">{task.title}</h3>
          <p className="text-gray-600">{task.description}</p>
        </>
      )}

      {/* Dropdown for Status */}
      <select
        value={editedStatus}
        onChange={(e) => {
          setEditedStatus(e.target.value);
          onUpdate(task.id, { status: e.target.value });
        }}
        className="w-full p-2 border rounded"
      >
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>

      {/* Buttons */}
      <div className="flex justify-between mt-4">
        {isEditing ? (
          <button
            onClick={handleSave}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
          >
            Edit
          </button>
        )}

        <button
          onClick={() => onDelete(task.id)}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
