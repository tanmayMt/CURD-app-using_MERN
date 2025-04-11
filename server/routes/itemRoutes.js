import express from "express";
import Item from "../models/Item.js";

const router = express.Router() ;

router.post("/",async(req,res)=>{
    const {name, description, price} = req.body;
    const newItem = new Item({name, description, price});
})

router.get("/",async(req,res)=>{
    res.status(200).send({
        success: true,
        data:"Items"
    })
})

export default router;