const mongoose = require('mongoose');

const Cart = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    refs: 'User',
  },
  cart: {
    type: Array,
    required: true,
  },
  date: {
    type: String,
    default: Date.now,
  },
});

module.exports = mongoose.model('cart', Cart);
