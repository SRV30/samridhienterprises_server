const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
  getAdminProducts,
} = require("../controllers/productController");
// const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router = express.Router();

router.route("/products").get(getAllProducts);

router
  .route("/admin/products")
  .get(getAdminProducts);

router
  .route("/admin/product/new")
  .post(createProduct);

router
  .route("/admin/product/:id")
  .put(updateProduct)
  .delete(deleteProduct);

router.route("/product/:id").get(getProductDetails);

module.exports = router;
