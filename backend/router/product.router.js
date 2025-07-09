import express from "express";
import mongoose from "mongoose";
import Product from "../model/product.model.js";
const router = express.Router();

import {getProducts} from "../controller/product.controller.js";
import {createProducts} from "../controller/product.controller.js";
import {deleteProducts} from "../controller/product.controller.js";
import {putProducts} from "../controller/product.controller.js";

export default router;


router.get("/", getProducts);
router.post("/", createProducts);
router.delete("/:id", deleteProducts); 
router.put("/:id", putProducts);



