import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'
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

    await User.create({name, userName, email, password: hashedPassword});
    res.status(201).json({message: "User created successfully"});

}catch(err){
    res.status(500).json({message: "Server error"});
}
}