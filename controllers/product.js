// product_index_get

const Product = require("../models/Product")

const moment = require('moment')


// CREATE
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