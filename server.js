// Sior Luxury Jewelry - Stripe Payment Backend Server (Node.js / Express)
// To run:
// 1. npm install express stripe cors dotenv
// 2. Add your STRIPE_SECRET_KEY in a .env file (e.g. STRIPE_SECRET_KEY=sk_test_...)
// 3. Run: node server.js

const express = require('express');
const cors = require('cors');
require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY || 'sk_test_51MockKeyForSiorJewelryServerOnlyReplaceWithYourRealStripeKey');

const app = express();
app.use(cors());
app.use(express.json());

// Health Check Endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Sior Stripe API Server Online' });
});

// Create Stripe PaymentIntent Endpoint
app.post('/api/create-payment-intent', async (req, res) => {
  try {
    const { amount, currency, items, customerEmail, customerName } = req.body;

    // Convert amount to smallest currency unit (e.g. AED cents)
    const amountInCents = Math.round((parseFloat(amount) || 100) * 100);

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amountInCents,
      currency: currency || 'aed',
      receipt_email: customerEmail,
      metadata: {
        customer_name: customerName || 'Sior VIP Client',
        items_summary: Array.isArray(items) ? items.join(', ') : String(items || '')
      },
      automatic_payment_methods: {
        enabled: true,
      },
    });

    res.json({
      clientSecret: paymentIntent.client_secret,
      publishableKey: process.env.STRIPE_PUBLISHABLE_KEY || 'pk_test_sample'
    });
  } catch (error) {
    console.error('Stripe PaymentIntent Error:', error);
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✨ Sior Stripe Server running on port ${PORT}`);
});
