import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import { generateToken } from '../config/token.js';

export const signUp = async (req, res) => {
    const {name, userName, email, password} = req.body;
    console.log(req.body);

    try{
    if(!name || !userName || !email || !password){
        return res.status(400).json({message: "All fields are required"});
    }

    const existingUserEmail = await User.findOne({email});
    if(existingUserEmail){
        return res.status(400).json({message: "Email already exists"});
    }

    const existingUserName = await User.findOne({userName});
    if(existingUserName){
        return res.status(400).json({message: "Username already exists"});
    }

    if(password.length<6) return res.status(404).send("password should be > 6")

    const salt = await bcrypt.genSalt(10);
    let hashedPassword = await bcrypt.hash(password, salt);
    console.log(salt)

    let newUser = await User.create({name, userName, email, password: hashedPassword});
    const token = await generateToken(newUser._id);

    res.cookie("token", token, {
        httpOnly: true,
        sameSite: 'strict',
        maxAge: 30*24*60*60*1000 // 30 days
    });

    console.log(token)
    res.status(201).json({message: "User created successfully", newUser} );

}catch(err){
    res.status(500).json({message: "Server error"});
}
}

export const signIn = async (req, res) => {
    const {userName, password} = req.body;
    console.log(req.body);

    try{
    if(!userName || !password){
        return res.status(400).json({message: "All fields are required"});
    }

    const existingUser = await User.findOne({userName});
    if(!existingUser){
        return res.status(400).json({message: "Invalid credentials"});
    }

    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
    if(!isPasswordCorrect){
        return res.status(400).json({message: "Invalid credentials"});
    }

    const token = await generateToken(existingUser._id);
    res.cookie("token", token, {
        httpOnly: true,
        sameSite: 'strict',
        maxAge: 30*24*60*60*1000 // 30 days
    });
    console.log(token)

    res.status(200).json({message: "User signed in successfully", token} );

}catch(err){
    res.status(500).json({message: "Server error"});
}
}