// userInfo 더미 데이터

const userInfoData = {
  nickname1: "2eebug",
  friendCode1: "617654262236",
  nickname2: "minos15",
  friendCode2: "315211115555",
  nickname3: "lee7",
  friendCode3: "413525469663",
  nickname4: "",
  friendCode4: "",
  nickname5: "",
  friendCode5: "",
};

let userInfoInput = {
  nickname1: "",
  friendCode1: "",
  nickname2: "",
  friendCode2: "",
  nickname3: "",
  friendCode3: "",
  nickname4: "",
  friendCode4: "",
  nickname5: "",
  friendCode5: "",
};

const sendBtn = document.querySelector(".send-btn");
const userInfo = document.querySelector(".user-info");
const profile = document.querySelector(".profile-name");

function saveUserInfo() {
  const pointer = this.parentNode.previousSibling;
  const name = document.querySelectorAll(".nickName");
  const code = document.querySelectorAll(".friendCode");

  for (let i = 0; i < pointer.childNodes.length; i++) {
    if (i % 2 == 1) {
      pointer.childNodes[i].classList.add("d-none");
    } else {
      pointer.childNodes[i].classList.remove("d-none");
    }
  }

  for (let j = 0; j < pointer.childNodes.length; j++) {
    if (j % 2 == 1) {
      pointer.childNodes[j - 1].innerText = pointer.childNodes[j].value;
    }
  }
  userInfoInput.nickname1 = name[0].innerText;
  userInfoInput.nickname2 = name[1].innerText;
  userInfoInput.nickname3 = name[2].innerText;
  userInfoInput.nickname4 = name[3].innerText;
  userInfoInput.nickname5 = name[4].innerText;

  userInfoInput.friendCode1 = code[0].innerText;
  userInfoInput.friendCode2 = code[1].innerText;
  userInfoInput.friendCode3 = code[2].innerText;
  userInfoInput.friendCode4 = code[3].innerText;
  userInfoInput.friendCode5 = code[4].innerText;

  console.log(userInfoData);
  console.log(userInfoInput);
}

function editUserInfo() {
  const pointer = this.parentNode.previousSibling;
  for (let i = 0; i < pointer.childNodes.length; i++) {
    if (i % 2 == 1) {
      pointer.childNodes[i].classList.remove("d-none");
    } else {
      pointer.childNodes[i].classList.add("d-none");
    }
  }
}

function paintUserInfo() {
  for (let i = 1; i < 6; i++) {
    const newList = document.createElement("li");
    newList.setAttribute("class", "d-flex justify-content-around align-items-center user-info-list");
    const numberSpan = document.createElement("span");

    const infoDiv = document.createElement("div");
    const nameSpan = document.createElement("span");
    const nameInput = document.createElement("input");
    const codeSpan = document.createElement("span");
    const codeInput = document.createElement("input");

    const btnDiv = document.createElement("div");
    const editBtn = document.createElement("button");
    const saveBtn = document.createElement("button");

    numberSpan.setAttribute(`id`, `idNumber${i}`);
    numberSpan.innerText = `#${i}`;

    nameSpan.setAttribute(`id`, `nickname${i}`);
    nameSpan.setAttribute(`class`, `nickName form-control rounded-pill border-0 user-info`);
    nameInput.setAttribute(`class`, `input-nickName d-none form-control rounded-pill user-info`);
    nameInput.setAttribute(`id`, `NICKNAME${i}`);

    codeSpan.setAttribute(`id`, `friendCode${i}`);
    codeSpan.setAttribute(`class`, `friendCode form-control rounded-pill border-0 user-info`);
    codeInput.setAttribute(`class`, `input-friendCode d-none form-control rounded-pill user-info`);
    codeInput.setAttribute(`id`, `FRIENDCODE${i}`);

    infoDiv.appendChild(nameSpan);
    infoDiv.appendChild(nameInput);
    infoDiv.appendChild(codeSpan);
    infoDiv.appendChild(codeInput);
    infoDiv.setAttribute(`class`, `d-flex flex-column justify-content-between align-items-center`);

    btnDiv.appendChild(editBtn);
    editBtn.setAttribute(`class`, `edit-btn btn btn-default btn-sm`);
    editBtn.innerHTML = `<i class="fas fa-pen"></i>`;

    editBtn.addEventListener("click", editUserInfo);

    btnDiv.appendChild(saveBtn);
    saveBtn.setAttribute(`class`, `del-btn btn btn-default btn-sm`);
    saveBtn.innerHTML = `<i class="fas fa-check"></i>`;

    saveBtn.addEventListener("click", saveUserInfo);

    btnDiv.setAttribute(`class`, `d-flex flex-column justify-content-between align-items-center`);

    newList.appendChild(numberSpan);
    newList.appendChild(infoDiv);
    newList.appendChild(btnDiv);

    userInfo.appendChild(newList);
  }

  let name = document.querySelectorAll(".nickName");
  let code = document.querySelectorAll(".friendCode");
  let inputNickName = document.querySelectorAll(".input-nickName");
  let inputFriendCode = document.querySelectorAll(".input-friendCode");

  name[0].innerText = userInfoData.nickname1;
  name[1].innerText = userInfoData.nickname2;
  name[2].innerText = userInfoData.nickname3;
  name[3].innerText = userInfoData.nickname4;
  name[4].innerText = userInfoData.nickname5;

  code[0].innerText = userInfoData.friendCode1;
  code[1].innerText = userInfoData.friendCode2;
  code[2].innerText = userInfoData.friendCode3;
  code[3].innerText = userInfoData.friendCode4;
  code[4].innerText = userInfoData.friendCode5;

  inputNickName[0].value = userInfoData.nickname1;
  inputNickName[1].value = userInfoData.nickname2;
  inputNickName[2].value = userInfoData.nickname3;
  inputNickName[3].value = userInfoData.nickname4;
  inputNickName[4].value = userInfoData.nickname5;

  inputFriendCode[0].value = userInfoData.friendCode1;
  inputFriendCode[1].value = userInfoData.friendCode2;
  inputFriendCode[2].value = userInfoData.friendCode3;
  inputFriendCode[3].value = userInfoData.friendCode4;
  inputFriendCode[4].value = userInfoData.friendCode5;
}

function loadUserInfo() {
  profile.innerText = userInfoData.nickname1;
  paintUserInfo();
}

sendBtn.addEventListener("click", sendAjax);

// function sendAjax() {
//   const httpReq = new XMLHttpRequest();
//   const url = "http://192.168.1.136:8888/mypage";

//   httpReq.open("POST", url, true);
//   console.log("good");

//   httpReq.setRequestHeader("Access-Control-Allow-Headers", "*");
//   httpReq.setRequestHeader("Content-type", "application/json");
//   httpReq.setRequestHeader("Access-Control-Allow-Origin", "*");
//   console.log("ok");

//   httpReq.onreadystatechange = function () {
//     console.log("test1");
//     console.log(httpReq.status);
//     if (httpReq.readyState === 4 && httpReq.status === "success") {
//       console.log("test2");
//       alert(httpReq.responseText);
//     }
//   };

//   console.log("DATA : " + JSON.stringify(userInfoInput));
//   httpReq.send(JSON.stringify(userInfoInput));
// }

function sendAjax(url, method, data, callback) {
  const httpReq = new XMLHttpRequest();
  httpReq.open(method, url, true);
  console.log("good");

  httpReq.setRequestHeader("Access-Control-Allow-Headers", "*");
  httpReq.setRequestHeader("Content-type", "application/json");
  httpReq.setRequestHeader("Access-Control-Allow-Origin", "*");
  console.log("ok");

  httpReq.onreadystatechange = function () {
    console.log("들어옴1");
    if (httpReq.readyState === 4 && httpReq.status === 200) {
      console.log("들어옴2");
      console.log(httpReq.responseText);
      callback(httpReq);
    }
  };

  if (data != null) {
    console.log("POST방식");
    httpReq.send(data);
  } else {
    console.log("GET방식");
    httpReq.send();
  }
}

function getUserInfo() {
  const url = "http://192.168.1.136:8888/mypage";

  sendAjax(url, "GET", null, function (res) {
    // console.log(res.response);
    let result = JSON.parse(res.response);
    console.log(result);
  });
}

window.addEventListener("load", loadUserInfo);
// window.addEventListener("load", getUserInfo);
