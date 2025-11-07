import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiShoppingCart, FiMinus, FiPlus, FiTrash2 } from 'react-icons/fi';
import { CartItemType } from '../../types/eventTypes';
import './ShoppingCart.css';

interface ShoppingCartProps {
  cartItems: CartItemType[];
  onClose: () => void;
  onQuantityChange: (title: string, change: number) => void;
  onRemoveClick: (item: CartItemType) => void;
  calculateTotal: () => number;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({
  cartItems,
  onClose,
  onQuantityChange,
  onRemoveClick,
  calculateTotal,
}) => {
  const [isClosing, setIsClosing] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300); // Match animation duration
  };

  const handleCheckout = () => {
    if (cartItems.length > 0) {
      // Save cart to localStorage
      localStorage.setItem('eventCartItems', JSON.stringify(cartItems));
      handleClose();
      setTimeout(() => {
        navigate('/payment');
      }, 300);
    }
  };

  return (
    <React.Fragment>
      <div 
        className={`cart-overlay ${isClosing ? 'closing' : ''}`} 
        onClick={handleClose}
      />
      <div className={`shopping-cart ${isClosing ? 'closing' : ''}`}>
        <div className="cart-header">
          <h3><FiShoppingCart /> Shopping Cart</h3>
          <button className="close-cart" onClick={handleClose}>×</button>
        </div>
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.imageUrl} alt={item.title} />
              <div className="cart-item-details">
                <h4>{item.title}</h4>
                <p>${item.price}</p>
                <div className="quantity-controls">
                  <button onClick={() => onQuantityChange(item.title, -1)}>
                    <FiMinus />
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => onQuantityChange(item.title, 1)}>
                    <FiPlus />
                  </button>
                  <button 
                    className="remove-item"
                    onClick={() => onRemoveClick(item)}
                  >
                    <FiTrash2 />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-total">
          <span>Total:</span>
          <span>${calculateTotal()}</span>
        </div>
        <button 
          className="checkout-button" 
          onClick={handleCheckout}
          disabled={cartItems.length === 0}
        >
          Proceed to Checkout
        </button>
      </div>
    </React.Fragment>
  );
};


export default ShoppingCart;