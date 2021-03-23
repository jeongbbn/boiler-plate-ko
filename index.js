const express = require('express') //express 모듈을 가져옴
const app = express() //express 앱을 넣어줌
const port = 5000 //5000번 포트에서 동작 
const bodyParser = require('body-parser');
const {User} = require("./models/User");

const config = require('./config/key');


//application/x-www-form-urlencoded  이렇게 생긴 데이터를 분석해서 가져옴
app.use(bodyParser.urlencoded({extended:true}));
//application/json json타입을 분석해서 가져옴
app.use(bodyParser.json());



//GET METHOD
app.get('/', (req, res) => {
    res.send('Hello World!')
})

//POST METHOD 회원가입을 위한 route
app.post('/register', (req, res) =>{
    //회원가입에 사용되는 정보들을 client에 가져오면
    //그것들을 데이터베이스에 넣어준다.
    
    const user = new User(req.body)
    //mongoDB 메소드 
    user.save((err, userinfo)=>{
        if(err) return res.json({success:false, err})
        return res.status(200).json({success:true})
    })
})


const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
        userNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }).then(() => {
        console.log('MongoDB connected')
    })
    .catch(err => console.log(err))


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})