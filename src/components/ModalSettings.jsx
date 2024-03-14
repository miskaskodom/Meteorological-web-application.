import React from "react";

const ModalSettings = ({ open, onClose, children }) => {
  return (
    <div
      onClick={onClose}
      className={`
       fixed inset-0 flex justify-center items-center
       transition-colors
       ${open ? "visible bg-black/20" : "invisible"}
       `}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
        bg-white rounded-xl shadow p-6 transition-all h-screen
        ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
        `}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-8 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600 text-4xl mt-10 "
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
};
export default ModalSettings;
