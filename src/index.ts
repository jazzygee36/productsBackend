import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import { productRoutes } from "./modules/productRoutes.route";
const app = express();
const Port = process.env.PORT;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(cors());

app.use("/api", productRoutes);

app.listen(Port, () => console.log(`Server running on localhost://${Port}`));
