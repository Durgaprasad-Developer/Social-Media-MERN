import jwt from 'jsonwebtoken';

const generateToken = async(id) => {
    try{
     const token = jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: '30d'});
    return token;
}catch(err){
    console.log("Error in generateToken", err);
    throw err;  
}
}
export {generateToken};