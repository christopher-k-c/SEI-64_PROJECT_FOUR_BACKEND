// First Require Mongoose
const mongoose = require('mongoose');


// Build Product Schema 
const productSchema = mongoose.Schema({

    // productName: String,
    // productPrice: Number,
    // productDescription: String,
    // productStock: Number

    productName: {
        type: String,
        // required: true,
        maxlength: [100, "Product name exceeds character limit"]

    },
    productPrice: {
        type: Number,
        // required: true

    },
    productDescription: {
        type: String,
        // required: true,
        maxlength: [500, "Product description exceeds character limit"]

    },
    productStock: {
        type: Number,
        // required: true

    },
    productImageUrl: {
        type: String,
    }


    // Still need to set up Order Models relationship 

},
{
    timestamps: true // createdAt and updatedAt etc
});


// Initializing Product Model
const Product = mongoose.model("Product", productSchema);



module.exports = Product;