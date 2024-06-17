import React, { useState } from 'react';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import './subscription.css';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51PRs64SJyoSEKWZjlsOK3VH29JvJN5Oz9Ux0s6S2yWQF30FrO8trfjBWpOW8zHHc8c6BwFDeKV3dtaZbrA1s6lx200pdAebIjK');

const SubscriptionForm = () => {
    const [email, setEmail] = useState('');
    const [plan, setPlan] = useState('free');
    const [couponMessage, setCouponMessage] = useState('');
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        try {
            const response = await axios.post('http://localhost:3001/create-subscription', {
                email,
                plan
            });

            alert(`Subscription created! Invoice URL: ${response.data.invoiceUrl}`);
        } catch (error) {
            setCouponMessage(error.response.data.message);
        }
    };

    return (
        <Elements stripe={stripePromise}>
          <center>  <div className="subscription-container mt-7">
                <h1>Subscribe to a Plan</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label>Email Address:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label>Choose a Plan:</label>
                        <select value={plan} onChange={(e) => setPlan(e.target.value)} required>
                            <option value="free">Free - ₹0/month</option>
                            <option value="bronze">Bronze - ₹100/month</option>
                            <option value="silver">Silver - ₹300/month</option>
                            <option value="gold">Gold - ₹1000/month</option>
                        </select>
                    </div>
                    <div className="card-element-container">
                        <label>Card Details:</label>
                        <div className="card-element">
                            <CardElement />
                        </div>
                    </div>
                    <div className="button-container">
                        <button type="submit" disabled={!stripe}>
                            Subscribe
                        </button>
                    </div>
                    {couponMessage && <p className="error-message">{couponMessage}</p>}
                </form>
            </div>
            </center>
        </Elements>
    );
};

export default SubscriptionForm;
