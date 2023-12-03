"use strict";

const express = require("express");
const router = express.Router();
//router.get("/",(req,res)=>{
//app.get("/",(req,res)=>{
//    res.render("home/index");});
//↓ 밑의 hello와 위의 함수는 같은 의미이고,
//단순히 구현부를 나눠놨을 뿐이다.
const ctrl = require("./home.ctrl");
//ctrl로 나누었기 때문에, 여기서 ctrl 내용을 받아와야한다.

router.get("/",ctrl.hello); // ctrl 부분을 모듈화 함.
/*router.get("/login",(req,res)=>{
    //라우터는 단순히 /login 이라는 도메인에 들어왔을때
    //클라이언트의 요청을 연결해주는 부분.
    // /login의 요청에 해당하는 부분을 수행하는 부분 : ↓
    //app.get("/login",(req,res)=>{
    res.render("home/login");});*/
// app.js와 이 파일은 아무런 연관관계가 없음. 따라서 쓸 수 없음. 
    // 이 router를 외부 파일에서도 쓸 수 있도록 하는 코드 추가.
router.get("/login",ctrl.login);
module.exports = router;