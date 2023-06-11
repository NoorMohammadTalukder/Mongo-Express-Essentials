const jwt = require('jsonwebtoken');

exports.tokenVerify=(req,res,next)=>{
    console.log("hit")
    const data="dummy data";
    const key="dummy key";
    const token=req.headers.token;

    if (!token) {
        return res.status(401).json({ message: "Unauthorized",error:"empty token in headers" });
    }
    jwt.verify(token, key,(err,decoded)=>{
        if(err){
            return res.status(401).json({ message: "Unauthorized",error:err });
        }else{
            next();
        }
    });
}