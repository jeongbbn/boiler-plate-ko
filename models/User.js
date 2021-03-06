const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type:String,
        maxlength:50
    },
    email:{
        type:String,
        trim:true, //space를 없애주는 역할
        unique:1
    },
    password:{
        type:String,
        minlength:5
    },
    lastname:{
        type:String,
        maxlength:50
    },
    role:{
        type:Number,
        default:0
    },
    image: String,
    token:{
        type: String
    },

    tokenExp:{
        type:Number 
    }
})

const User = mongoose.model('User', userSchema)

module.exports = {User} //외부에서도 User 모듈을 사용할 수 있도록 추출