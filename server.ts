import express, { response } from 'express';

import Stripe from 'stripe';
import dotenv from 'dotenv';
import path from 'path';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2020-08-27',
});

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app
  .listen(port, () => {
    console.log('Server running on port ' + port);
  })
  .on('error', (error) => {
    throw error;
  });

app.post('/payment', (req: express.Request, res: express.Response) => {
  const {
    token: { id },
    amount,
  }: { token: any; amount: number } = req.body;
  const body = {
    source: id,
    amount,
    currency: 'usd',
  };

  stripe.charges
    .create(body)
    .then((response) => res.status(200).send({ success: response }))
    .catch((reason) => res.status(500).send({ error: reason }));
});
