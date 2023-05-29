import React, { useState } from 'react';
import LoginForm from './LoginForm';

const LoginFormModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Open Login Modal</button>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-container">
            <button onClick={closeModal} className="close-button">×</button>
            <LoginForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginFormModal;