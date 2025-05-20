const express = require('express');
const {home, addProduct, productDetail, register} = require('../controllers/index.controller');
const router = express.Router();

//vista home
router.get('/', home);
//vista addProduct
router.get('/addProduct', addProduct);
//vista productDetail
router.get('/productDetail/:id', productDetail);
//vista productDetail
router.get('/productDetail/:id', register);



module.exports = router