import React, { useState } from 'react';
import './ConfirmDialog.css';

interface ConfirmDialogProps {
  title: string;
  message: string;
  onCancel: () => void;
  onConfirm: () => void;
}

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  title,
  message,
  onCancel,
  onConfirm,
}) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = (callback: () => void) => {
    setIsClosing(true);
    setTimeout(() => {
      callback();
    }, 300); // Match animation duration
  };

  return (
    <div className={`confirm-dialog-overlay ${isClosing ? 'closing' : ''}`}>
      <div className={`confirm-dialog ${isClosing ? 'closing' : ''}`}>
        <h3>{title}</h3>
        <p>{message}</p>
        <div className="confirm-dialog-buttons">
          <button onClick={() => handleClose(onCancel)}>Cancel</button>
          <button onClick={() => handleClose(onConfirm)}>Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDialog;