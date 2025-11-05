import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import './PaymentEventsPage.css';

interface CartItem {
  title: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

const PaymentEventsPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    country: 'Vietnam',
    address: '',
    email: '',
    city: '',
    phone: '',
    orderNotes: ''
  });

  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [agreedToPolicy, setAgreedToPolicy] = useState(false);

  // Get cart items from localStorage or state management
  const [cartItems] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('eventCartItems');
    return saved ? JSON.parse(saved) : [];
  });

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const shippingCost = 0; // Free shipping
  const total = calculateSubtotal() + shippingCost;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!agreedToTerms) {
      alert('Please agree to the terms and conditions');
      return;
    }

    // Process payment
    console.log('Payment data:', {
      formData,
      paymentMethod,
      cartItems,
      total
    });

    // Clear cart
    localStorage.removeItem('eventCartItems');
    
    // Navigate to success page or show success message
    alert('Order placed successfully!');
    navigate('/');
  };

  if (cartItems.length === 0) {
    return (
      <div className="payment-page">
        <div className="empty-cart-message">
          <h2>Empty Cart</h2>
          <p>Please add events to your cart before checkout.</p>
          <button onClick={() => navigate('/events')} className="return-btn">
            Return to Events
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="payment-page">
      {/* Hero Section */}
      <section className="payment-hero">
        <div className="payment-hero-overlay"></div>
        <div className="payment-hero-content">
          <h1>PAYMENT</h1>
          <div className="breadcrumb">
            <span>home</span> <FiChevronRight /> <span>checkout</span>
          </div>
        </div>
      </section>

      <div className="payment-container">
        <form onSubmit={handleSubmit} className="checkout-form">
          {/* Billing Details */}
          <div className="billing-section">
            <h2>BILLING INFORMATION</h2>
            
            <div className="form-row">
              <div className="form-group">
                <label>
                  First Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>
                  Last Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Company Name (optional)</label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>
                Country/Region <span className="required">*</span>
              </label>
              <select
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                required
              >
                <option value="Vietnam">Vietnam</option>
                <option value="USA">United States</option>
                <option value="UK">United Kingdom</option>
              </select>
            </div>

            <div className="form-group">
              <label>
                Address <span className="required">*</span>
              </label>
              <input
                type="text"
                name="address"
                placeholder="Apartment, suite, unit, etc. (optional)"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label>
                City <span className="required">*</span>
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label>
                Phone <span className="required">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label>
                Email Address <span className="required">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-checkbox">
              <input
                type="checkbox"
                id="privacy"
                checked={agreedToPolicy}
                onChange={(e) => setAgreedToPolicy(e.target.checked)}
              />
              <label htmlFor="privacy">
                I have read and agree to the{' '}
                <a href="#" className="policy-link">privacy policy</a>{' '}
                <span className="required">*</span>
              </label>
            </div>

            <div className="form-group">
              <label>Order Notes (optional)</label>
              <textarea
                name="orderNotes"
                value={formData.orderNotes}
                onChange={handleInputChange}
                rows={4}
                placeholder="Notes about your order, e.g. special notes for delivery."
              />
            </div>
          </div>

          {/* Order Summary */}
          <div className="order-section">
            <h2>YOUR ORDER</h2>
            
            <div className="order-summary">
              <div className="order-header">
                <span>PRODUCT</span>
                <span>SUBTOTAL</span>
              </div>

              <div className="order-items">
                {cartItems.map((item, index) => (
                  <div key={index} className="order-item">
                    <div className="item-name">
                      {item.title} × {item.quantity}
                    </div>
                    <div className="item-price">
                      ${(item.price * item.quantity).toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>

              <div className="order-row">
                <span>Subtotal</span>
                <span className="price">${calculateSubtotal().toLocaleString()}</span>
              </div>

              <div className="order-row">
                <span>Shipping</span>
                <span className="shipping">Free shipping</span>
              </div>

              <div className="order-total">
                <span>Total</span>
                <span className="total-price">${total.toLocaleString()}</span>
              </div>

              {/* Payment Methods */}
              <div className="payment-methods">
                <div className="payment-option">
                  <input
                    type="radio"
                    id="cash_pickup"
                    name="payment"
                    value="cash_pickup"
                    checked={paymentMethod === 'cash_pickup'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <label htmlFor="cash_pickup">
                    Pay with cash upon delivery (for HCMC only)
                  </label>
                </div>

                <div className="payment-option">
                  <input
                    type="radio"
                    id="cod"
                    name="payment"
                    value="cod"
                    checked={paymentMethod === 'cod'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <label htmlFor="cod">
                    Cash on Delivery (COD)
                  </label>
                </div>

                <div className="payment-option">
                  <input
                    type="radio"
                    id="bank_transfer"
                    name="payment"
                    value="bank_transfer"
                    checked={paymentMethod === 'bank_transfer'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <label htmlFor="bank_transfer">
                    Bank Transfer (Scan QR Code)
                  </label>
                </div>

                {paymentMethod === 'bank_transfer' && (
                  <div className="bank-transfer-info">
                    <p className="bank-info-title">Transfer directly to our bank account using QR code:</p>
                    <div className="bank-details">
                      <div className="bank-logos">
                        <img src="https://api.vietqr.io/img/ICB.png" alt="VietinBank" />
                        <img src="https://api.vietqr.io/img/VCB.png" alt="Vietcombank" />
                        <img src="https://api.vietqr.io/img/BIDV.png" alt="BIDV" />
                        <img src="https://api.vietqr.io/img/AGRIBANK.png" alt="Agribank" />
                        <img src="https://api.vietqr.io/img/OCB.png" alt="OCB" />
                        <img src="https://api.vietqr.io/img/MB.png" alt="MBBank" />
                        <img src="https://api.vietqr.io/img/TECHCOMBANK.png" alt="Techcombank" />
                        <img src="https://api.vietqr.io/img/ACB.png" alt="ACB" />
                        <img src="https://api.vietqr.io/img/VPBANK.png" alt="VPBank" />
                        <img src="https://api.vietqr.io/img/TPBANK.png" alt="TPBank" />
                        <img src="https://api.vietqr.io/img/SACOMBANK.png" alt="Sacombank" />
                        <img src="https://api.vietqr.io/img/HDBANK.png" alt="HDBank" />
                        <img src="https://api.vietqr.io/img/VIETBANK.png" alt="VietBank" />
                        <img src="https://api.vietqr.io/img/MSB.png" alt="MSB" />
                        <img src="https://api.vietqr.io/img/CAKE.png" alt="CAKE" />
                        <img src="https://api.vietqr.io/img/UBANK.png" alt="Ubank" />
                        <img src="https://api.vietqr.io/img/TIMO.png" alt="Timo" />
                        <img src="https://api.vietqr.io/img/VNMART.png" alt="VNMart" />
                        <img src="https://api.vietqr.io/img/VIETCAPITALBANK.png" alt="VietCapital" />
                        <img src="https://api.vietqr.io/img/SCB.png" alt="SCB" />
                        <img src="https://api.vietqr.io/img/VIB.png" alt="VIB" />
                        <img src="https://api.vietqr.io/img/SHB.png" alt="SHB" />
                        <img src="https://api.vietqr.io/img/EXIMBANK.png" alt="Eximbank" />
                        <img src="https://api.vietqr.io/img/MSBANK.png" alt="MSBank" />
                        <img src="https://api.vietqr.io/img/CAKE.png" alt="CAKE" />
                        <img src="https://api.vietqr.io/img/NAB.png" alt="Nam A Bank" />
                        <img src="https://api.vietqr.io/img/PGB.png" alt="PGBank" />
                        <img src="https://api.vietqr.io/img/VIETBANK.png" alt="VietBank" />
                        <img src="https://api.vietqr.io/img/BAOVIETBANK.png" alt="BaoViet Bank" />
                        <img src="https://api.vietqr.io/img/SEABANK.png" alt="SeABank" />
                        <img src="https://api.vietqr.io/img/COOPBANK.png" alt="Co-op Bank" />
                        <img src="https://api.vietqr.io/img/LPBANK.png" alt="LPBank" />
                        <img src="https://api.vietqr.io/img/KLB.png" alt="KienLongBank" />
                      </div>
                      <p className="bank-note">
                        Transfer using QR code to receive automatic discount. Simply scan the code using 
                        your bank's app on your smartphone for transactions in Vietnam supported by over 14 major banks 
                        and is automatically processed.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className="privacy-notice">
                <p>
                  Your personal data will be used to process your order, support your experience 
                  throughout this website, and for other purposes described in our{' '}
                  <a href="#" className="policy-link">privacy policy</a>.
                </p>
              </div>

              <div className="form-checkbox terms-checkbox">
                <input
                  type="checkbox"
                  id="terms_conditions"
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                  required
                />
                <label htmlFor="terms_conditions">
                  I have read and agree to the website{' '}
                  <a href="#" className="terms-link">terms and conditions</a>{' '}
                  <span className="required">*</span>
                </label>
              </div>

              <button type="submit" className="place-order-btn">
                PLACE ORDER
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentEventsPage;
