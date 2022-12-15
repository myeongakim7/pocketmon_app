const express = require("express");
// express 를 추가하는 코드
const app = express();
// CORS 모듈
const cors = require("cors");
const poketmons = require("./data.js");
console.log(poketmons);

// CORS 설정 : 다 허용
app.use(cors());
// get 요청 응답
app.get("/", function (요청, 응답) {
  응답.send("홈페이지");
});
/* '/',에 접속하면 function()콜백함수에 응답하라 => 비동기함수 같은거
app.get(서버접속경로, 콜백함수)
클라이언트 -request(요청)-> 서버 
클라이언트 <-response(응답)- 서버

get = 웹페이지를 읽을 때*/

// API 요청
app.get("/api/:id", function (req, res) {
  console.log(req.params.id);
  if (req.params.id == "all") {
    res.json(poketmons);
    console.log(req.params.id);
    // 요청한 변수(params.id)의 포켓몬 데이터 보내기
    res.json(poketmons[req.params.id]);
  }
});
// 홈페이지 자체가 아니라 필요한 데이터만 보내주는 것

// 서버 오픈
app.listen(3001, function () {
  console.log(`서버가 열림`);
});
// localhost:3001 우리가 지금 개발하고 있는 코드
