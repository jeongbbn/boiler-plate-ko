const express = require('express') //express ����� ������
const app = express() //express ���� �־���
const port = 5000 //5000�� ��Ʈ���� ���� 
const bodyParser = require('body-parser');
const {User} = require("./models/User");

const config = require('./config/key');


//application/x-www-form-urlencoded  �̷��� ���� �����͸� �м��ؼ� ������
app.use(bodyParser.urlencoded({extended:true}));
//application/json jsonŸ���� �м��ؼ� ������
app.use(bodyParser.json());



//GET METHOD
app.get('/', (req, res) => {
    res.send('Hello World!')
})

//POST METHOD ȸ�������� ���� route
app.post('/register', (req, res) =>{
    //ȸ�����Կ� ���Ǵ� �������� client�� ��������
    //�װ͵��� �����ͺ��̽��� �־��ش�.
    
    const user = new User(req.body)
    //mongoDB �޼ҵ� 
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