import express from "express";
import bcrypt from "bcryptjs"
import User from "../models/User.js"

const router = express.Router();

router.post("/register",async(req,res)=>{
  try {
    const { username, email, password } = req.body;

    const existingUser = await User.find({email});
    if(existingUser){
      return res.status(400).send({
        success:false,
        message:"Email already registered"
      })
    }

    //Let's Hashing the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword =  await bcrypt.hash(password,salt);

    const Newuser = new User({username, email, password:hashedPassword});
    await Newuser.save();
    res.status(200).send({
        success: true,
        data: Newuser,
        message: "User registered successfully🚀"
    })        
  } 
  catch (error)
  {
    console.log(error);
    res.status(500).send({
        success: false,
        message: "Errro in Registeration!",
        error
    })
  }

})
// router.post("/login",async(req,rs)=>{
//   try{
//     const {email,password} = req.body;
//     const user = User.findOne({email});

//   }
//   catch(error){
    
//   }
// })
export default router;