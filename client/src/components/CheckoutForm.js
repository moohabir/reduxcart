import { Button } from '@mui/material';
import {
  PaymentElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function CheckoutForm() {
  const [processing, setProcessing] = useState(false);
  const { totalPrice } = useSelector((store) => store.cart);
  const stripe = useStripe();
  const elements = useElements();

  const HandleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setProcessing(true);
    const { error, paymentMethod } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/completion`,
      },
    });
    if (error) {
      setProcessing(false);
    }
  };

  return (
    <form onSubmit={HandleSubmit}>
      <PaymentElement />
      <Button type="submit">
        {processing ? 'Processing' : `Pay now${totalPrice}`}
      </Button>
    </form>
  );
}

export default CheckoutForm;
