// jQuery AJAX 통신

// $(document).ready(function () {
//   $('#register-btn').click(function (e) {
//     e.preventDefault();

//     let data = { nickname1: $('#nickname1').val(), friendCode1: $('#friendCode1').val() };
//     jsonData = JSON.stringify(data);
//     console.log($('#friendCode1').val().length);

//     $.ajax({
//       type: 'post',
//       url: '/newsignjson',
//       data: jsonData,
//       dataType: 'json',
//       contentType: 'application/json',
//       success: function (data) {
//         console.log(data);
//         alert('success');
//       },
//       error: function (jqXHR, textStatus, errorThrown) {
//         alert(`error! \n ${textStatus} : ${errorThrown}`);
//       },
//     });
//   });

//   });

const registerBtn = document.querySelector(".register-btn");
const clearBtn = document.querySelector(".clear-btn");
const errMsg = document.querySelector(".err-msg");

const inputName = document.querySelector(".nickname1");
const inputCode = document.querySelector(".friendCode1");

// get 더미 데이터
const userInfoData = {
  userId: "1668589466621909",
  nickname1: "",
  friendCode1: "",
};

// post 더미 데이터
let userInfoInput = {
  userId: "1668589466621909",
  nickname1: "",
  friendCode1: "",
};

function clearInput(event) {
  event.preventDefault();
  inputName.value = "";
  inputCode.value = "";
  errMsg.innerText = "";
}

function handleRegister() {
  const sendName = inputName.value;
  const nameRgx = RegExp(/^[가-힣A-Za-z0-9_\-]{5,20}$/);
  const name = nameRgx.test(sendName);
  if (name == false) {
    errMsg.innerText = "Check your Nickname.";
  } else {
    const sendCode = inputCode.value;
    const codeRgx = RegExp(/^[0-9_\-]{12}$/);
    const code = codeRgx.test(sendCode);
    if (code == false) {
      errMsg.innerText = "Check your Friend code.";
    } else {
      userInfoInput.nickname1 = sendName;
      userInfoInput.friendCode1 = sendCode;
      console.log("ajax ready :)");
      registerAPI();
    }
  }
}
// AJAX

function registerAPI() {
  const httpReq = new XMLHttpRequest();
  const url = "/";

  httpReq.open("POST", url, true);
  console.log("good");

  httpReq.setRequestHeader("Access-Control-Allow-Headers", "*");
  httpReq.setRequestHeader("Content-type", "application/json");
  httpReq.setRequestHeader("Access-Control-Allow-Origin", "*");
  console.log("ok");

  httpReq.onreadystatechange = function () {
    console.log("test1");
    console.log(httpReq.status);
    if (httpReq.readyState === 4 && httpReq.status === "success") {
      console.log("test2");
      alert(httpReq.responseText);
    }
  };

  console.log("DATA : " + JSON.stringify(userInfoInput));
  httpReq.send(JSON.stringify(userInfoInput));
}

registerBtn.addEventListener("click", handleRegister);
clearBtn.addEventListener("click", clearInput);
