// First Require Mongoose
const mongoose = require('mongoose');


// Build Product Schema 
const productSchema = mongoose.Schema({

    // productName: String,
    // productPrice: Number,
    // productDescription: String,
    // productStock: Number

    productName: {
        type: String

    },
    productPrice: {
        type: Number

    },
    productDescription: {
        type: String

    },
    productStock: {
        type: Number

    },


    // Still need to set up Order Models relationship 

},
{
    timestamps: true // createdAt and updatedAt etc
});


// Initializing Product Model
const Product = mongoose.model("Product", productSchema);



module.exports = Product;