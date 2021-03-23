const express = require('express') //express 모듈을 가져옴
const app = express() //express 앱을 넣어줌
const port = 5000 //5000번 포트에서 동작 

app.get('/', (req, res) => {
    res.send('Hello World!')
})

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://hugo:qwerty12@boilerplate.n5imz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
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