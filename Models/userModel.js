const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    profile_pic:{
        type:String
    },
    github:{
        type:String
    },
    linkdin:{
        type:String
    }
})


const users=mongoose.model('users',userSchema)

module.exports=users