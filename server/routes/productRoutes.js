const express = require('express');
const { createProduct, getAllProducts, updateProduct, deleteProduct } = require('../controllers/productController');
const { isAdmin } = require('../middleware/auth');
const router = express.Router();

router.post('/', isAdmin, createProduct);
router.get('/', getAllProducts);
router.put('/:productId', isAdmin, updateProduct);
router.delete('/:productId', isAdmin, deleteProduct);

module.exports = router;
