const express = require('express');
const cors = require('cors');
require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const path = require('path');

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: [
      'https://reduxcart-one.vercel.app',
      'http://localhost:3000',
      'https://reduxcart-x68s.onrender.com',
    ],
  })
);

// Serve frontend
if (process.env.NODE_ENV === 'production') {
  // Serve static files from the "build" folder
  app.use(express.static(path.join(__dirname, './client/build')));

  // Route all other requests to the frontend's "index.html" file
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, './client/build', 'index.html'))
  );
} else {
  app.get('/', (req, res) => res.send('Please set to production'));
}

app.get('/config', (req, res) => {
  res.send({ pablishebaleKey: process.env.STRIPE_PUBLISHABLE_KEY });
});

app.post('/create-payment-intent', async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      currency: 'EUR',
      amount: 1999,
      automatic_payment_methods: {
        enabled: true,
      },
    });
    res.send({ client_secret: paymentIntent.client_secret });
  } catch (e) {
    return res.status(400).send({ error: { message: e.message } });
  }
});

app.listen(process.env.PORT, (req, res) => {
  console.log(`Backend connected succussfully at port ${process.env.PORT}`);
});
