"use strict";
// // const express = require("express");
// // const app = express();
// // app.get("/",(req,res)=>{
// // res.send("여기는 루트입니다.");
// // //root로 들어왔을때 동작할 내용.
// // });
// // app.get("/login",(req,res)=>{
// //     res.send("여기는 로그인 화면입니다.");
// // // 처음에 나오는 /는 root를 의미하기에, 빠지면
// // 안된다.
// // });

// // app.listen(3000,function(){
// //     console.log("서버 가동");
// // });

// // //브라우저가 요청한 경로로
// // //이동해주는 routing 기능을 만들어 봄.

// // //서버 띄우는 것은
// // /*
// // const express = require("express");
// // const app = express();
// // app.listen(3000,function(){
// //     console.log("서버 가동");
// // });
// // 이것만 있으면 기능한다.
// // */
// //전체 주석 : ctrl + /
// const http = require("http");
// //http : 내장 모듈. 따로 npm으로 다운받을 필요 X.
// const app = http.createServer((req,res)=>{
//     res.writeHead(200,{"Content-Type":"text/html; charset=utf-8"});
//     //console.log(req.url);
//     //url로 요청한 것을 console로 출력하는 것.
//     //그럼 우리는 console로 출력된 url들을,
//     //즉 접근하는 위치들을 알아낼 수 있어서
//     //요청들을 routing 해줄 수 있게 됨.
//     if(req.url == '/')
//     {
//         res.end("여기는 루트입니다.");
//     }
//     else if(req.url=="/login"){
//         res.end("여기는 로그인 화면입니다.");
//     }
// });
// app.listen(3001,()=>{
// console.log("http로 가동된 서버입니다.");
// });
// //이대로면 root 경로를 찾아주지 못해 연결만 계속
// //시도한다.
// //http로 사용하면 너무 간결해지지 못한다. 불편하다.
// //따라서 express를 사용하는게 좋음.
// //한글 사용하는 방법 : res.writeHead(200,{"Content-Type":"text/html; charset=utf-8"});
// // 
const express = require("express");
const app = express();
//앱 세팅
app.set("views","./views");
//화면 views를 관리할 폴더, 파일을 뒤에 지정해주면 됨.
app.set("view engine", "ejs");
const PORT = 3000;
//view를 사용하는데 필요한 엔진 지정가능.
//html과 굉장히 비슷한, 많이 쓰이는 ejs.
// app.get("/",(req,res)=>{
//     //res.send("여기는 루트입니다.");
//     //그 파일로, 혹은 홈페이지로 이동하는 코드를 짜줘야함. ->
// res.render("home/index");
//      rendering 하는 파일도 따로 만들어서 관리해줄 수 있음. -> routers/home/index.js
/*res.send(
`<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    여기는 루트입니다.
</body>
</html>`*/
//root로 들어왔을때 동작할 내용.
//});
// app.get("/login",(req,res)=>{
//     //이 도메인에 도달했을때 띄워질 홈페이지를 연결하는 함수.
//     res.render("home/login");

    //res.send("로그인화면입니다."); 
  /*  res.send(
        `<!DOCTYPE html>
        <html lang="ko">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <input type="text" placeholder="아이디"><br>
            <input type="text" placeholder="비밀번호"><br>
            <button>로그인</button>
        </body>
        </html>`*/
// 처음에 나오는 /는 root를 의미하기에, 빠지면
// 안된다.
//});


//라우팅
//router를 받아오는 기능을 하는 코딩
const home = require("./routers/home")//이것은 만들어둔 자바 script 파일을 require해서 불러오는것. 따라서 폴더를 상대적으로 명시해야 함.
app.use("/",home);
//use 미들웨어를 등록해주는 메서드
/*app.listen(PORT,function(){
    console.log("서버가동");
}); 모듈화 진행하기*/
//모듈화를 진행 시, 받는 파일에서도 파일 수신 진행 코드를 작성하고,
//주는 파일에서도 파일 송신 진행 코드를 작성해야 한다.
// =>
module.exports = app;
//ejs 가 설치되어 있지 않을 시. 홈페이지에 에러코드가 뜬다.