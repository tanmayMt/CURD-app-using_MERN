import express from "express";
import Item from "../models/Item.js";
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router() ;

router.get('/protected', authMiddleware, (req, res) => {
  res.status(202).send(`User ID: ${req.userId} & Email ID: ${req.email}`);
});

router.post("/",async(req,res)=>{
    const {name, description, price} = req.body;
    const newItem = new Item({name, description, price});
})

router.get("/", authMiddleware, async(req,res)=>{
    res.status(200).send({
        success: true,
        data:"Items"
    })
})



export default router;