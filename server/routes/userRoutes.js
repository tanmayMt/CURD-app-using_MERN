import express from "express";
import bcrypt from "bcryptjs"
import User from "../models/User.js"

const router = express.Router();

router.post("/register",async(req,res)=>{
  try {
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({email});
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
        message: "Server Errro in Registeration!",
        error
    })
  }
})

router.post("/login",async(req,res)=>{
  try {
    const {email,password} = req.body;// Destructuring email and password from request body

    const user = await User.findOne({email});// Finding user by email in the database
    if(!user){// If user not found, return invalid credentials response
      return res.status(401).json({
        success:false,
        message:"Invalid credentials",
        error: "Invalid credentials"
      })
    }
    
     // Compare the provided password with the stored hashed password
    const isMatch = await bcrypt.compare(password,user.password);
    if(!isMatch){ // If password doesn't match, return invalid credentials response
      return res.status(401).json({
        success:false,
        message:"Invalid credentials",
        error: "Invalid credentials"
      })
    }

    // If everything is valid, return success response with user data

    // Destructure 'password1' from the user document and store the rest of the fields in 'rest'
    // This helps exclude the password1 field from being sent in the response
    const { password1, ...rest } = user._doc;
    // Send a success response with the user data (excluding password1)
    res.status(200).json({
      success:true,
      message:"User is Logged in Successfully",
      data:rest
    })
  }
  catch (error) {  // Handle any server errors during login
    // console.log("Login Error:", error);
    res.status(500).send({
        success: false,
        message: "Server Error in Logging!",
        error
    })
  }
})


export default router;