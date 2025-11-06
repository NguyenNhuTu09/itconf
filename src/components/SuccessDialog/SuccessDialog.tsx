import React, { useState } from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import './SuccessDialog.css';

interface SuccessDialogProps {
  title: string;
  message: string;
  onClose: () => void;
}

const SuccessDialog: React.FC<SuccessDialogProps> = ({
  title,
  message,
  onClose,
}) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300); // Match animation duration
  };

  return (
    <div className={`success-dialog-overlay ${isClosing ? 'closing' : ''}`}>
      <div className={`success-dialog ${isClosing ? 'closing' : ''}`}>
        <div className="success-icon">
          <FiCheckCircle size={60} />
        </div>
        <h3>{title}</h3>
        <p>{message}</p>
        <div className="success-dialog-button">
          <button onClick={handleClose}>OK</button>
        </div>
      </div>
    </div>
  );
};

export default SuccessDialog;
