const Product = require('../models/Product');

// Create product (admin)
const createProduct = async (req, res) => {
  const { name, description, price, category, brand, stock, imageUrl } = req.body;

  try {
    const product = new Product({ name, description, price, category, brand, stock, imageUrl });
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Update product (admin)
const updateProduct = async (req, res) => {
  const { productId } = req.params;
  const updates = req.body;

  try {
    const product = await Product.findByIdAndUpdate(productId, updates, { new: true });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Delete product (admin)
const deleteProduct = async (req, res) => {
  const { productId } = req.params;

  try {
    await Product.findByIdAndDelete(productId);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { createProduct, getAllProducts, updateProduct, deleteProduct };
