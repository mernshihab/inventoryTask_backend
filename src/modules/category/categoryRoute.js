import express from "express";
import {
  getCategories,
  getCategory,
  addCategory,
  updateCategoryById,
  deleteCategoryById,
  getCategoryByNameHandler,
} from "./categoryController.js";

const router = express.Router();

router.get("/", getCategories);
router.get("/:id", getCategory);
router.post("/add", addCategory);
router.put("/update/:id", updateCategoryById);
router.delete("/delete/:id", deleteCategoryById);
router.get("/name/:name", getCategoryByNameHandler);

export default router;
