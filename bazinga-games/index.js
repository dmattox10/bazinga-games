require('dotenv').config();
const cors = require('cors');
const stripe = require('stripe')('sk_test_51M6yNAChZbepu0tegirpoYXAh8qTu81xCEJQJuKVPkuHeSAVBH0NWxx0juJZNuFNdAtNYTl8QRTgyThIh1ABqwUt00IWs0OqDY') // Even if it's a test key, delete this key from your account and switch to using ENV file!
const uuid = require('uuid')
const PORT = 5000;
const express = require('express');
const server = express();
const morgan = require('morgan');
server.use(morgan('dev'));
server.use(cors())
server.use(express.json())

const apiRouter = require('./api');
server.use('/api', apiRouter);

const client = require('./db/client');
client.connect();

server.listen(PORT, () => {
  console.log('The server is up on port', PORT)
});
