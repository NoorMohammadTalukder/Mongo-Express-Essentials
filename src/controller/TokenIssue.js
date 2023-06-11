const jwt = require('jsonwebtoken');

exports.generateToken=(req,res)=>{
    const data="dummy data";
    const key="dummy key";
    const token= jwt.sign({ data }, key);
    res.status(200).json({message:"token generation successful",token:token})
}