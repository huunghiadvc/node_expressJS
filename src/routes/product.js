const express = require('express');
const router = express.Router();

const productscontroller = require('../app/controller/ProductsController');

// newscontroller.index
router.use('/:slug', productscontroller.show);
router.use('/', productscontroller.index);

module.exports = router;