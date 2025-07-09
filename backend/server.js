import express from "express";
import dotenv from "dotenv";
import {connectDB} from "./config/database.js";
import Product from "./model/product.model.js";
import productRoutes from "./router/product.router.js";
import path from "path";

process.env.NODE_ENV = process.env.NODE_ENV || "development";
const envFile = `.env.${process.env.NODE_ENV}`;
const result = dotenv.config({path:envFile});

const app = express();
const port = process.env.PORT || 5000;
const __dirname = path.resolve();


console.log(result);
console.log(process.env.NODE_ENV);
console.log(envFile);
console.log("Database is ", process.env.DATABASE_URL);

app.use(express.json());

app.use("/api/products", productRoutes);

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "/frontend/dist")));
    app.get("*", (req,res)=>{
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    });
}

app.listen(port, ()=>{
    connectDB();
    console.log(`Server started at http://localhost:${port}, Hello you all, How are you!`);
});




