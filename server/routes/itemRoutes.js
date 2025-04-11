import express from "express";
import Item from "../models/Item.js";
import authMiddleware from '../middleware/authMiddleware.js';

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

router.get('/protected', authMiddleware, (req, res) => {
  res.send(`Hello User with ID: ${req.userId}}`);
  console.log(`Hello User with ID: ${req.userId}`);
});

export default router;