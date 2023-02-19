import express from "express";
import {
  getAllProducts,
  getProductById,
  postAllProducts,
  updateProductId,
} from "./product.Controller";
const router = express.Router();

router.post("/products", postAllProducts);
router.get("/products", getAllProducts);
router.get("/products/:id", getProductById);
router.patch("/products/:id", updateProductId);

export const productRoutes = router;
