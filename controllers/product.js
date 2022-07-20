// product_index_get

const {Product} = require("../models/Product")

const moment = require('moment')


// PRODUCT POST - CREATE
exports.product_index_post = (req, res) => {
    
    let product = new Product(req.body);
    console.log(req.body)

    product.save()
    .then((product) => {

        res.json({product})
    })
    .catch((err) => {
        console.log(err);
        res.send("Sorry, please try again...");
    })
}


// PRODUCT GET - READ
exports.product_index_get = (req, res) => {

    Product.find()
    .then(product => {

        res.json({product})
    })
    .catch((err) => {
        console.log(err);
        res.send("Try again!!!")
    })
}
