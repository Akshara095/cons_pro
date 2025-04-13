const Cart = require('../models/Cart');

// Add product to cart
const addToCart = async (req, res) => {
  const { productId, quantity } = req.body;
  const userId = req.userId;

  try {
    const cart = await Cart.findOne({ user: userId });
    if (!cart) {
      const newCart = new Cart({ user: userId, products: [{ product: productId, quantity }] });
      await newCart.save();
      return res.status(201).json(newCart);
    }

    const productIndex = cart.products.findIndex(item => item.product.toString() === productId);
    if (productIndex > -1) {
      cart.products[productIndex].quantity += quantity;
    } else {
      cart.products.push({ product: productId, quantity });
    }

    await cart.save();
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { addToCart };
