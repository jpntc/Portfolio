// ProjectPopup.js
import React from "react";

const ProjectPopup = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg max-w-lg w-full relative">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          &times;
        </button>
        <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
        <p className="mb-4">{project.description}</p>
        {project.demo ? (
          <div className="mb-4">
            <iframe
              src={project.demo}
              allowFullScreen
              className="w-full h-64 border rounded"
              title={`${project.title} demo`}
            />
          </div>
        ) : (
          <p className="mb-4">Demo Coming Soon</p>
        )}
        {project.gitUrl ? (
          <a
            href={project.gitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            View on GitHub
          </a>
        ) : (
          <p>Coming Soon</p>
        )}
      </div>
    </div>
  );
};

export default ProjectPopup;
