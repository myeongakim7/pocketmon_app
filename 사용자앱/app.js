// app.js

fetch("http://localhost:3001/api/all")
  .then(function (응답) {
    return 응답.json();
    // retrun 꼭 해줘야함
  })
  .then(function (data) {
    console.log(data);
    const poketmon_list = document.querySelector(".poketmon-list");
    // .item div 생성
    const itemE1 = document.createElement("div");
    // class 추가
    itemE1.classList.add("item");
    // console.log(itemE1);
    itemE1.innerHTML = ` 
    <img src="${data[0].imgUrl}" alt="${data[0].name}">
     <div class="info">
     <h3>이름: ${data[0].name}</h3>
     <p>타입: ${data[0].type}</p>
     </div>`;

    // poketmon-list에 item을 추가
    poketmon_list.appendChild(itemE1);

    // 과제: 전체 포켓몬을 표시하시오(반복문)

    for (i = 0; i < 4; i++) {
      const itemE1 = document.createElement("div");
      itemE1.classList.add("item");
      itemE1.innerHTML = `<img src="${data[i].imgUrl}" alt="${data[i].name}">
    <div class="info">
    <h3>이름: ${data[i].name}</h3>
    <p>타입: ${data[i].type}</p>
    </div>`;

      poketmon_list.appendChild(itemE1);
    }
  });
