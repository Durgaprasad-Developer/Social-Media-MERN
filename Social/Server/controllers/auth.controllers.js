import User from '../models/user.model.js'

const signUp = async (req, res) => {
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

    await User.create({name, userName, email, password});
    res.status(201).json({message: "User created successfully"});

}catch(err){
    res.status(500).json({message: "Server error"});
}
}