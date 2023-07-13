import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

function PaymentForm() {
  const [stripePromise, setStripePromise] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  useEffect(() => {
    const fetchPublicKey = async () => {
      const res = await axios.get('https://reduxcart-x68s.onrender.com/config');
      const { pablishebaleKey } = res.data;
      setStripePromise(loadStripe(pablishebaleKey));
      console.log(pablishebaleKey);
    };
    fetchPublicKey();
  }, []);

  useEffect(() => {
    const fetchSecretKey = async () => {
      const res = await axios.post(
        'https://reduxcart-x68s.onrender.com/create-payment-intent'
      );
      const { client_secret } = res.data;
      console.log(client_secret);

      setClientSecret(client_secret);
    };
    fetchSecretKey();
  }, []);

  return (
    <>
      {clientSecret ? (
        <Elements
          stripe={stripePromise}
          options={{ clientSecret }}
        >
          <CheckoutForm />
        </Elements>
      ) : (
        <p>Loading </p>
      )}
    </>
  );
}

export default PaymentForm;
