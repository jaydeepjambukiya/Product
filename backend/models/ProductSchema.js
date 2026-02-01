const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product name is required"],
    trim: true,
    minlength: [3, "Name must be at least 3 characters long"],
    maxlength: [100, "Name cannot exceed 100 characters"]
  },

  price: {
    type: Number,
    required: [true, "Price is required"],
    min: [0, "Price cannot be negative"]
  },

  image: {
    type: String,
    required: [true, "Image URL is required"],
    match: [/^https?:\/\/.+/, "Please enter a valid image URL"]
  },

  description: {
    type: String,
    required: [true, "Description is required"],
    minlength: [10, "Description must be at least 10 characters long"]
  },

  category: {
    type: String,
    required: [true, "Category is required"],
    enum: {
      values: ["Electronics", "Clothing", "Footwear", "Books", "Home", "Other"],
      message: "Category is not valid"
    }
  },

  quantity: {
    type: Number,
    required: [true, "Quantity is required"],
    min: [0, "Quantity cannot be negative"]
  },

  rating: {
    type: Number,
    required: [true, "Rating is required"],
    min: [0, "Rating must be between 0 and 5"],
    max: [5, "Rating must be between 0 and 5"]
  }

}, {
  timestamps: true
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
