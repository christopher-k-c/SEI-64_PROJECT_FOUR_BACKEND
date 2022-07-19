const express= require("express");

const router = express.Router()

const productCtrl = require("../controllers/product")

router.post("/product/index", productCtrl.product_index_post)

module.exports = router;


