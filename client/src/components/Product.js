import React from 'react';
import { useSelector } from 'react-redux';
import ProductItem from './ProductItem';
import { Container, Grid, Typography } from '@mui/material';

function Product() {
  const { products, isLoading } = useSelector((store) => store.product);
  console.log(products);
  if (isLoading) {
    <h4>Loading</h4>;
  }
  return (
    <Container
      sx={{
        displaY: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
        width: '100%',
        overflow: 'hidden',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '20px',
          marginTop: '20px',
        }}
      >
        Product List
      </Typography>
      <Grid
        container
        spacing={3}
      >
        {products.map((product) => (
          <Grid
            item
            xs={12}
            sm={6}
          >
            <ProductItem
              product={product}
              key={product.id}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Product;
