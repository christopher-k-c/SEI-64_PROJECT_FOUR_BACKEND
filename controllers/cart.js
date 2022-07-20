const {Cart} = require('../models/Cart')
const {Product} = require('../models/Product')

// const moment = require('moment');


// const cart = async () => {
//     const carts = await Cart.find().populate({
//         path: "product",
//         model: "Product"
//     });
//     return carts[0];
// };

// const addProduct = async payload => {
//     const cartItem = await Cart.create(payload);
//     return cartItem
// }

// const getProduct = async id => {
//     const product = await Product.findById(id);
//     return product;
// }

// exports.addCartItem = async (req, res) => {
//     console.log("add item to cart")
//     console.log(req.body)
//     const { Product } = req.body;
//     console.log(Product)
//     try {
//         let cart = await cart();
//         let product = await getProduct(Product.id)
//         if (!product) {
//             return res.status(500).json({
//                 type: "Not Found",
//                 msg: "Invalid Request"
//             })
//         }
//         if (cart) {
//             indexExists = cart.
//         }
//     }
// }