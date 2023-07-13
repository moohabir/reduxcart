import React from 'react';
import { Button } from '@mui/icons-material';
import { addToCart } from '../features/cartSlice';
import { useDispatch } from 'react-redux';
import { Card, Container, Grid } from '@mui/material';

function ProductItem({ product }) {
  const dispatch = useDispatch();
  return (
    <Container>
      <Card
        sx={{
          displaY: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 'auto',
        }}
      >
        <img
          src={product.image}
          alt={product.title}
          width={350}
          height={350}
        />
        <h4>{product.title}</h4>
        <p>{product.description}</p>
        <p>${product.price}</p>
        <button onClick={() => dispatch(addToCart(product))}>
          Add to cart
        </button>
      </Card>
    </Container>
  );
}

export default ProductItem;
