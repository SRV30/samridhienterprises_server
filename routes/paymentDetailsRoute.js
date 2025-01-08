const express = require("express");
const {
  getPaymentDetails,
  updatePaymentDetails,
} = require("../controllers/paymentDetailsController");
const router = express.Router();
// const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

router.route("/get/paymentDetails").get(getPaymentDetails);
router.route("/update/paymentDetails").put(updatePaymentDetails);

module.exports = router;
