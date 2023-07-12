import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem';
import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../features/cartSlice';

function Cart() {
  const { cart, totalAmount, totalPrice } = useSelector((store) => store.cart);
  console.log(cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  if (totalAmount < 1) {
    return (
      <div>
        <Typography variant="h4">
          Your Cart is Empty! please add items
        </Typography>
      </div>
    );
  }
  return (
    <div>
      <Typography variant="h4">Your Cart</Typography>
      {cart.map((item) => (
        <CartItem
          item={item}
          key={item.id}
        />
      ))}
      <Typography>Total: ${totalPrice}</Typography>
      <Button onClick={() => dispatch(clearCart())}>Clear cart</Button>
      <Button onClick={() => navigate('/payment')}>Checkout</Button>
    </div>
  );
}

export default Cart;
