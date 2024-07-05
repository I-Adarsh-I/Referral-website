const express = require('express');
const { PrismaClient } = require('@prisma/client');
const bodyParser = require('body-parser');
const sendMail = require('./mailer')
require('dotenv').config()

const app = express();
const prisma = new PrismaClient();

app.use(bodyParser.json());

app.get('/', async(req,res) => {
    res.send('Welcome to referral app.')
})

// Create a new referral
app.post('/referrals', async (req, res) => {
  try {
    const { name, email, referralCode } = req.body;
    const referral = await prisma.referral.create({
      data: {
        name,
        email,
        referralCode,
      },
    });
    console.log('referal tried!')

    sendMail(
        email,
        'Referral created successfully',
        `You are referred by - Adarsh Singh`
    );

    res.status(201).json(referral);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all referrals
app.get('/allreferrals', async (req, res) => {
  try {
    const referrals = await prisma.referral.findMany();
    res.status(200).json(referrals);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
