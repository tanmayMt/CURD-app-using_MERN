import express from "express";
import Item from "../models/Item.js";
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router() ;

router.get('/protected', authMiddleware, (req, res) => {
  res.status(202).send(`User ID: ${req.userId} & Email ID: ${req.email}`);
});

router.post("/",authMiddleware,async(req,res)=>{
    try {
        const {name, description, price} = req.body;
        // Create a new item associated with the authenticated user's ID
        const newItem = new Item({name, description, price, userId:req.userId});
        await newItem.save();//Save item to mongodb
        // Send back the created item with 201 (Created) status
        res.status(201).send({
            success:true,
            data: newItem,
            message:"Item is added Successfully"
        });
    }
    catch (error)
    {
        res.status(404).send({
            success:false,
            message: "Server Error in Adding Item"
        })
    }
    
})

router.get("/", authMiddleware, async(req,res)=>{
    res.status(200).send({
        success: true,
        data:"Items"
    })
})



export default router;