const jwt=require('jsonwebtoken')

const jwtMiddleware=(req,res,next)=>{
    
    const token=req.headers.authorization.split(" ")[1]
    try{
        const result=jwt.verify(token,process.env.SECRET_KEY)
        console.log(result)
        req.payload=result.userId
        next()

    }
    catch(err){
        res.status(400).json(err)
    }
    

    // next()
    
}

module.exports=jwtMiddleware