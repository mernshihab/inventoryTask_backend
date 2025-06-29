import fs from "fs";
import path from "path";
import {
  getAllProducts,
  getProductsByCategory,
  createProduct,
  deleteProductById,
} from "./productService.js";

const deleteFile = (filePath) => {
  fs.unlink(path.resolve(filePath), (err) => {
    if (err) {
      console.error("Failed to delete file:", filePath);
    }
  });
};

export const fetchProducts = async (req, res) => {
  try {
    const { category_id } = req.query;

    let products;
    if (category_id) {
      products = await getProductsByCategory(category_id);
    } else {
      products = await getAllProducts();
    }

    res.json({
      success: true,
      message: "Products fetched successfully",
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

export const addProduct = async (req, res) => {
  try {
    const { name, price, categoryId } = req.body;

    if (!name || !price || !categoryId || !req.file) {
      if (req.file?.path) {
        deleteFile(req.file.path);
      }
      return res.status(400).json({
        success: false,
        message: "All fields and image are required",
      });
    }

    const imagePath = `/uploads/products/${req.file.filename}`;
    const product = await createProduct({
      name,
      price: parseFloat(price),
      categoryId: Number(categoryId),
      image: imagePath,
    });

    res.status(201).json({
      success: true,
      message: "Product created successfully",
      data: product,
    });
  } catch (error) {
    if (req.file?.path) {
      deleteFile(req.file.path);
    }

    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

export const removeProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const products = await getAllProducts();
    const product = products.find((p) => p.id === Number(id));

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    await deleteProductById(id);

    const imagePath = product.image?.startsWith("/")
      ? product.image.slice(1)
      : product.image;
    if (imagePath) deleteFile(imagePath);

    res.json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};
