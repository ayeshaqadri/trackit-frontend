// src/components/Toast.jsx
import React from "react";

const Toast = ({ message, type }) => {
  let bgColor;

  if (type === "success") bgColor = "bg-green-500";
  else if (type === "error") bgColor = "bg-red-500";
  else if (type === "warning") bgColor = "bg-yellow-500";

  return (
    <div
      className={`${bgColor} text-white p-3 fixed bottom-5 left-1/2 transform -translate-x-1/2 rounded-lg shadow-lg`}
    >
      {message}
    </div>
  );
};

export default Toast;
