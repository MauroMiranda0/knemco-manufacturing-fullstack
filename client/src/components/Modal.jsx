// client/src/components/Modal.jsx
import React from 'react';
import { FiX } from 'react-icons/fi'; // Icono de 'X' para cerrar
import '../styles/Modal.css';

const Modal = ({ isOpen, onClose, children }) => {
  // Si el modal no está abierto, no renderizamos nada.
  if (!isOpen) {
    return null;
  }

  return (
    // El 'portal' del modal que contiene el overlay y el contenido
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-inner" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal-button" onClick={onClose}>
          <FiX />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;