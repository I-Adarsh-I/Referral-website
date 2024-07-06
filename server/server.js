const express = require('express');
const { PrismaClient } = require('@prisma/client');
const bodyParser = require('body-parser');
const sendMail = require('./mailer')
const cors = require('cors');
require('dotenv').config()

const app = express();
app.use(cors());
const prisma = new PrismaClient();

app.use(bodyParser.json());

app.get('/', async(req,res) => {
    res.send('Welcome to referral app.')
})

// Create a new referral
app.post('/referrals', async (req, res) => {
  try {
    const { name, email, referralCode } = req.body;
    if(!name || !email || !referralCode){
      return res.status(400).json({error: 'Mandatory fields are empty'})
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    const isEmailExist = await prisma.referral.findUnique({
      where:{
        email: email
      }
    })

    if(isEmailExist){
      return res.status(500).json({error: 'Referral has already been sent to this email'})
    }

    const referral = await prisma.referral.create({
      data: {
        name,
        email,
        referralCode,
      },
    });
    console.log('referal sent!')

    sendMail(
        email,
        'Referral created successfully',
        `You are referred by - Adarsh Singh`
    );

    res.status(201).json({message: 'Referral sent successfully!', referral});
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
