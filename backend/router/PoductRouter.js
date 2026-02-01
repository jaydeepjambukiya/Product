const express = require("express");
const router = express.Router();
const auth = require("../middieware/auth");

const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct
} = require("../controllers/Productcontrollers");

// CREATE PRODUCT
router.post("/create-product", createProduct);

// http://127.0.0.1:3000/api/create-product

// GET ALL PRODUCTS
router.get("/",  getAllProducts);
// GET SINGLE PRODUCT BY ID
router.get("/:id", getProductById);

// UPDATE PRODUCT BY ID
router.put("/update/:id", updateProduct);

// DELETE PRODUCT BY ID
router.delete("/delete/:id", deleteProduct);

module.exports = router;
