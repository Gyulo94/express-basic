const express = require('express');
const mysql = require('mysql');
const app = express()

// json 데이터 받기 위해
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// db 접속 정보
const db = mysql.createConnection({
    host: "127.0.0.1",
    user: "gyulo94",
    password: "q1w2e3",
    port: "3306",
    database: "db_codingrecipe"
});

db.connect(err => {
    console.log('db 연결 성공!!');
    console.log('err', err);
})

// 서버포트: 8000
// localhost:8000
app.listen(8000, () => {
    console.log("서버 가동 포트번호 8000");
});

// 기본 주소 요청
// localhost:8000
app.get("/", () => {
    console.log("기본주소 요청");
});

app.get("/hello", () => {
    console.log("hello 주소 요청");
});

// query string 받기
app.get("/qs", (req) => {
    console.log(req.query);
    console.log(req.query.p1);
    console.log(req.query.p2);
});

app.post("/hello", () => {
    console.log("/hello post 요청");
});

app.post("/post-req", (req) => {
    console.log(req.body);
    console.log(req.body.name);
    const { name, age } = req.body;
    console.log(`name: ${name}, age: ${age}`);
});

app.post("/save", (req) => {
    const { name, capital, population } = req.body;
    console.log(`name: ${name}, capital: ${capital}, population: ${population}`);
    const sql = "insert into nations_table(name, capital, population) values(?,?,?)";
    db.query(sql, [name, capital, population], (err, results, fields) => {
        console.log("err", err);
        console.log("results", results);
        console.log("fields", fields);
    })
});