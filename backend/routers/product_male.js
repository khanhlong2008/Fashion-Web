const router = require("express-promise-router")()
const productContrllers = require('../controllers/product_male')


router.route('/')
    .post(productContrllers.createProduct)
    .get(productContrllers.index);


module.exports = router