const express = require('express');

const auth = require('./auth');
const user = require('./user');
const product_female = require('./product_female');
const bill = require('./bill');
const product_male = require('./product_male');
const router = express.Router();

router.use('/auth', auth)
router.use('/user', user)
router.use('/product_female', product_female)
router.use('/bill', bill)
router.use('/product_male', product_male)

module.exports = router