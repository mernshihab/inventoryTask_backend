import express from "express";
import {
  addProduct,
  fetchProducts,
  removeProduct,
} from "./productController.js";
import singleUploader from "../../utils/singleUploader.js";

const router = express.Router();

const upload = singleUploader("uploads/products", "image");

router.get("/", fetchProducts);
router.post("/add", upload, addProduct);
router.delete("/delete/:id", removeProduct);

export default router;
