const express = require('express');

const router = express.Router();

router.use(express.json());

const cartCtrl = require('../controllers/cart');

// router.get('/cart/add', cartCtrl.addToCart)
