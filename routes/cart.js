const express = require('express');

const router = express.Router();

router.use(express.json());

const cartCtrl = require('../controllers/cart');

// router.get('/cart', cartCtrl.cart_create_get)
router.post('/cart', cartCtrl.cart_create_post)
router.post('/checkout', cartCtrl.order_create_post)
router.get('/orders/index', cartCtrl.order_index_get)
router.get('/orders/detail', cartCtrl.order_detail_get)


module.exports = router;