const express= require("express");

const router = express.Router()


const productCtrl = require("../controllers/product")

router.post("/product/add", productCtrl.product_index_post)
router.get("/product/index", productCtrl.product_index_get)
// router.put("/product/update", productCtrl.product_update_put)

module.exports = router;


