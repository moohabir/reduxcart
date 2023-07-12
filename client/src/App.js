import React, { useEffect } from 'react';
import { getProductItems } from './features/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotals } from './features/cartSlice';
import Product from './components/Product';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Completion from './components/Completion';
import PaymentForm from './components/PaymentForm';
function App() {
  const dispatch = useDispatch();
  const { cart } = useSelector((store) => store.cart);

  useEffect(() => {
    dispatch(getProductItems());
  }, []);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cart]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Product />}
        />
        <Route
          path="/cart"
          element={<Cart />}
        />
        <Route
          path="/completion"
          element={<Completion />}
        />
        <Route
          path="/payment"
          element={<PaymentForm />}
        />
      </Routes>
    </Router>
  );
}

export default App;
