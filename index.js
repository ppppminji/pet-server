const express=require("express");
const cors=require("cors");
const app=express();
var port="8080"; //사용 할 서버 포트

app.use(express.json());
app.use(cors());

//서버생성(request: 요청 , responsive: 응답)
app.get('/products', (req, res)=>{
    res.send({
        products:[
            {id:1, name:'고양이 장난감', price: 16100, seller:"에구에구", imageUrl:'img/products/toy01.jpg'},
            {id:2, name:'네이쳐 써클 캣토이', price: 16300, seller:"티티캣", imageUrl:'img/products/toy02.jpg'},
            {id:3, name:'셀프오뚜기', price: 13700, seller:"힐링타임", imageUrl:'img/products/toy03.jpg'},
            {id:4, name:'고양이 스크래처', price: 13600, seller:"우프우프", imageUrl:'img/products/toy04.jpg'}
        ]
    })
})
app.get('/products/:id/events/:eventId', (req, res)=>{
    const params=req.params;
    const {id, eventId} = params;
    res.send(`id는 ${id}와 ${eventId}입니다`)
})
app.post('/products', (req, res)=>{
    const body=req.body;
    res.send({
        body:body
    })
})
app.post('/login',(req, res)=>{
    res.send('로그인 해주세요')
})

app.listen(port, ()=>{
    console.log('펫 서버가 돌아가고 있습니다.')
})