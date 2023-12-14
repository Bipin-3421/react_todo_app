import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

export const ConfirmationModal = ({ isOpen, onRequestClose, onConfirm }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Confirmation Modal"
      className="bg-white p-4 rounded-md shadow-md max-w-xs mx-auto mt-20"
      overlayClassName="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50"
    >
      <h2 className="text-xl font-bold mb-2 text-center">Confirmation</h2>
      <p className="text-gray-700 mb-4">Would you like to delete this todo?</p>
      <div className="flex justify-between">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 "
          onClick={onConfirm}
        >
          Yes
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          onClick={onRequestClose}
        >
          No
        </button>
      </div>
    </Modal>
  );
};
