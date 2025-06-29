import express from 'express';

// Import all route modules
import categoryRoutes from '../modules/category/categoryRoute.js';
import productRoutes from '../modules/product/productRoute.js';

const router = express.Router();

// Route mappings
router.use('/category', categoryRoutes);
router.use('/products', productRoutes);

// Optional: Health check
router.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'API is running...',
  });
});

export default router;
