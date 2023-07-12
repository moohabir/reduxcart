import { Badge, Box, Container, IconButton, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const { totalAmount } = useSelector((store) => store.cart);
  return (
    <Container
      sx={{
        dispy: 'flex',
        justifyContent: 'space-between',
        backgroundColor: 'blue',
      }}
    >
      <Typography
        variant="h3"
        onClick={() => navigate('/')}
      >
        SimpleSore
      </Typography>
      <IconButton onClick={() => navigate('/cart')}>
        <Badge
          badgeContent={totalAmount}
          color="primary"
        >
          <ShoppingCartIcon color="action" />
        </Badge>
      </IconButton>
    </Container>
  );
}

export default Navbar;
