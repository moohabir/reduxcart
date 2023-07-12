import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increase, decrease, removeItem } from '../features/cartSlice';

function CartItem({ item }) {
  const { id, title, price, img, amount } = item;
  const { cart } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  return (
    <Container>
      <Card>
        <CardMedia>
          <img
            src={img}
            alt={title}
          />
        </CardMedia>
        <CardContent>
          <Typography variant="h4">{title}</Typography>
          <Typography variant="h6">${price}</Typography>
          <Button onClick={() => dispatch(removeItem(id))}>remove item</Button>
          <Button onClick={() => dispatch(increase({ id }))}>+</Button>
          <Button
            onClick={() => {
              if (item.amount === 1) {
                dispatch(removeItem(id));
                return;
              }
              dispatch(decrease({ id }));
            }}
          >
            -
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}

export default CartItem;
