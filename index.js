const express = require('express');
const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

// 서버포트: 8000
// localhost:8000
app.listen(8000, () => {
    console.log("서버 가동 포트번호 8000");
})

// 기본 주소 요청
// localhost:8000
app.get("/", (req, res) => {
    console.log("기본주소 요청");
});

app.get("/hello", () => {
    console.log("hello 주소 요청");
})