import React from "react";
import useModalStore from "../store/useModalStore";

function Modal() {
  const { isModalOpen, closeModal } = useModalStore();

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-20 flex items-center justify-center">
     
      <div className="bg-white p-5 rounded-xl w-96">
        <h2 className="text-lg font-bold mb-4">Salomaat</h2>
        <p>Modal</p>
        <button
          onClick={closeModal}
          className="bg-red-500 text-white mt-4 py-1 px-3 rounded-md hover:bg-red-600 hover:ml-12 "
        >
          chiqish
        </button>
      </div>
    </div>
  );
}

export default Modal;
