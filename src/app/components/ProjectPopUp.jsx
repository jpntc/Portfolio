import React from "react";

const ProjectPopup = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded shadow-lg max-w-md w-full relative">
        <button onClick={onClose} className="absolute top-2 right-2">
          Close
        </button>
        <h2 className="text-xl font-bold mb-2">{project.title}</h2>
        <p>{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectPopup;
