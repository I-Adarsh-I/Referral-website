# Referral Landing Page

A landing page created using React.js for sending referrals via email using Node.js, Express.js, and Nodemailer.

## Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/)

## Setup instructions

### Client

1. Navigate to the `client` directory:

   ```sh
   cd client
   npm install
   ```
   - Create a .env file
   ```sh
   REACT_APP_BASE_URL=http://localhost:3000
   ```
   - Start the server
   ```sh
   npm start
   ```
### Server
2. Navigate to the `server` directory:
   ```sh
   cd server
   npm install
   ```
   - Create a .env file
   ```sh
   DATABASE_URL="your-mongodb-connection-string"
   EMAIL_USER="your-email@example.com"
   EMAIL_PASS="your-email-password"
   ```
   - Generate prisma client
   ```sh
   npx prisma generate
   ```
   - Start the server
   ```sh
   npm start
   ```
   
