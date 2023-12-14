import React, { useState } from "react";
import { ConfirmationModal } from "./ConfirmationModal";

const Todo = ({ todo, deleteTodo, editItem, toggleComplete, updateItem }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDeleteClick = () => {
    setIsModalOpen(true);
  };

  const handleConfirmDelete = () => {
    deleteTodo(todo.id);
    setIsModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <li className=" flex items-center justify-center bg-slate-300 mb-4">
      <input
        type="checkbox"
        onChange={() => toggleComplete(todo)}
        checked={todo.completed ? "checked" : ""}
      />
      <p
        className={`text-[20px] capitalize ml-2 w-40  overflow-hidden ${
          todo.completed ? "line-through" : ""
        }`}
      >
        {todo.value}
      </p>

      <button
        className=" max-w-[60px] max-h-[60px] p-4 border-2 border-slate-900  bg-[#5865F2] text-slate-50 font-semibold mr-5"
        onClick={() => updateItem(todo)}
      >
        Edit
      </button>
      <button
        className="p-4  border-2 border-slate-900  bg-[#5865F2] text-slate-50 font-semibold max-w-[60px]  max-h-[60px] mr-2"
        onClick={handleDeleteClick}
      >
        Del
      </button>
      <ConfirmationModal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        onConfirm={handleConfirmDelete}
      />
    </li>
  );
};

export default Todo;
