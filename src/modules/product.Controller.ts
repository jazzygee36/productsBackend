import { Request, Response } from "express";
import { ProductsModel } from "./product.Model";

export const postAllProducts = async (req: Request, res: Response) => {
  try {
    const product = await ProductsModel.create(req.body);
    res.status(200).send(product);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const product = await ProductsModel.findAll();
    res.status(200).send(product);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getProductById = async (req: Request, res: Response) => {
  try {
    const productId = await ProductsModel.findByPk(req.params.id);
    res.status(200).send(productId);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const updateProductId = async (req: Request, res: Response) => {
  try {
    const product = await ProductsModel.update(req.body, {
      where: { id: req.params.id },
    });
    res.status(200).send({ success: true, product });
  } catch (error) {
    res.status(500).send(error);
  }
};
