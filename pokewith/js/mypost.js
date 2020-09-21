
//더미 데이터
const postData = [
    { p_id : 1,
      nickname1 : 'nickname1',
      u_like : '20',
      u_hate : '10',
      pokemon : '이상해씨',
      raidLevel : 1,
      startTime : '03:30',
      endTime : '04:15',
      minLevel : 20,
      nPass : 3,
      rPass : 0,
      p_end : 0}
]

const commentData = [
    { "c_id": "1",
      "p_id": "1",
      "userId": "1668589466621909",
      "checkNum": "12",
      "c_end": "0",
      "nickname1": "2eeebug",
      "friendCode1": "617654262236",
      "nickname2": null,
      "friendCode2": null,
      "nickname3": null,
      "friendCode3": null,
      "nickname4": null,
      "friendCode4": null,
      "nickname5": null,
      "friendCode5": null,
      "u_like": "88",
      "u_hate": "0"
    },
    { "c_id": "2",
      "p_id": "1",
      "userId": "1649416911892763",
      "checkNum": "1",
      "c_end": "0",
      "nickname1": "fdfd",
      "friendCode1": "123412341234",
      "nickname2": null,
      "friendCode2": null,
      "nickname3": null,
      "friendCode3": null,
      "nickname4": null,
      "friendCode4": null,
      "nickname5": null,
      "friendCode5": null,
      "u_like": "1",
      "u_hate": "0"
    },
    { "c_id": "3",
      "p_id": "1",
      "userId": "2649416911892763",
      "checkNum": "1",
      "c_end":"0",
      "nickname1": "fdfddd",
      "friendCode1": "234545671234",
      "nickname2": "dgdfde",
      "friendCode2": "234545671234",
      "nickname3": "dsgsdffddd",
      "friendCode3": "134545671234",
      "nickname4": "dsgsdfd",
      "friendCode4": "134645171234",
      "nickname5": "dsgs3",
      "friendCode5": "112464517123",
      "u_like":"2",
      "u_hate":"0"
    },
    { "c_id": "4",
      "p_id": "1",
      "userId": "2649416911892763",
      "checkNum": "13",
      "c_end":"0",
      "nickname1": "adfdsfd",
      "friendCode1": "234545671234",
      "nickname2": "dgdfde",
      "friendCode2": "234545671234",
      "nickname3": "dsgsdffddd",
      "friendCode3": "134545671234",
      "nickname4": "dsgsdfd",
      "friendCode4": "134645171234",
      "nickname5": "dsgs3",
      "friendCode5": "112464517123",
      "u_like":"3",
      "u_hate":"0"
    },
    { "c_id": "5",
      "p_id": "1",
      "userId": "2649416911892763",
      "checkNum": "12",
      "c_end":"0",
      "nickname1": "adfad",
      "friendCode1": "234545671234",
      "nickname2": "dgdfde",
      "friendCode2": "234545671234",
      "nickname3": "dsgsdffddd",
      "friendCode3": "134545671234",
      "nickname4": "dsgsdfd",
      "friendCode4": "134645171234",
      "nickname5": "dsgs3",
      "friendCode5": "112464517123",
      "u_like":"3",
      "u_hate":"0"
    }
]


//sendAjax() : ajax 연결 (POST/GET)
function sendAjax(url, method, data, callback){
  var httpReq = new XMLHttpRequest();

  httpReq.open(method, url, true);
  console.log('good');

  httpReq.setRequestHeader('Access-Control-Allow-Headers', '*');
  httpReq.setRequestHeader('Content-type', 'application/json');
  httpReq.setRequestHeader('Access-Control-Allow-Origin', '*');
  console.log('ok');

  httpReq.onreadystatechange = function () {
      console.log('들어옴1');
      if (httpReq.readyState === 4 && httpReq.status === 200) {
        console.log('들어옴2');
        console.log(httpReq.responseText);
        callback(httpReq);
      }
  };

  if(data != null){
    console.log("POST방식");
    httpReq.send(data);
  } else {
    console.log("GET방식");
    httpReq.send();
  }

}

//showMyPost() : myPost 게시글을 보는 함수
function showMyPost(resultData){
    
  let num = resultData.p_id;
  console.log(num);
  
  let startDiv = document.createElement("div");
  startDiv.setAttribute("class", "card shadow");
  startDiv.setAttribute("id", "result-box");

  let nickDiv = document.createElement("div");
  nickDiv.setAttribute("class", "card-header py-3 d-flex flex-row align-items-center justify-content-between");

  let nickName = '';
  nickName += '<p class="m-0 text-gray"><b>'+resultData.nickname1
              + '</b><i class="fa fa-thumbs-up updown" aria-hidden="true" style="font-size:10px"></i>' + resultData.u_like
              + ' <i class="fa fa-thumbs-down" aria-hidden="true" style="font-size:10px"></i>' + resultData.u_hate
              + '</p> <button class="endCheck" onclick="endPost('+num+')">end</button>'
  nickDiv.innerHTML = nickName;

  startDiv.appendChild(nickDiv);

  if(resultData.p_end == null || resultData.p_end == "2") {
    let currentDiv = document.querySelector("#my-box");
    let endPage = document.createElement("div");
    endPage.setAttribute("class", "card-body endBody");

    endStr = '<p class="endStr">Nothing!</p>';

    endPage.innerHTML = endStr;

    currentDiv.appendChild(endPage);
  } else {

    let cardDiv = document.createElement("div");
    cardDiv.setAttribute("class", "myCard card-body cardBody"+num);
    startDiv.appendChild(cardDiv);

    if(resultData.raidLevel == '1') {
        str = "<img src = 'img/1.PNG' style='width:50px'>"
    } else if(resultData.raidLevel == '3') {
        str = "<img src = 'img/3.PNG' style='width:50px'>"
    } else if(resultData.raidLevel == '5') {
        str = "<img src = 'img/5.PNG' style='width:50px'>"
    } else {
        str = "<img src = 'img/mega.PNG' style='width:50px'>"
    }
    
    cardDiv.innerHTML += '<input type="hidden" id="postId" name="postId" value="'+ resultData.p_id +'">';
    cardDiv.innerHTML += '<p> Pokemon : ' + resultData.pokemon+'</p>';
    cardDiv.innerHTML += '<p> Level of Raid : ' + str + '</p>';
    cardDiv.innerHTML += '<p> Start Time of Raid : ' + resultData.startTime+'</p>';
    cardDiv.innerHTML += '<p> End Time of Raid : ' + resultData.endTime+'</p>';
    cardDiv.innerHTML += '<p> Required Player Level : ' + resultData.minLevel+'</p>';
    cardDiv.innerHTML += '<p> Premium Pass : <img src="img/3_premium.png" style="width:60px"> / <img src="img/2_premium.png" style="width:50px">' + resultData.nPass+'</p>';
    cardDiv.innerHTML += '<p> Remote Pass : <img src="img/1_remote.png" style="width:60px"> ' + resultData.rPass + '</p>';

    let commentDiv3 = document.createElement('div');
    commentDiv3.setAttribute('class', 'commentBox');
    commentDiv3.setAttribute('id', 'commentBox');

    let commentA = document.createElement('button');
    commentA.setAttribute('id', 'comment'+num)
    commentA.setAttribute('class', 'hide-link');
    commentA.setAttribute('onclick', 'allCommentAjax('+num+')');
  
  
    let commentText = document.createTextNode('comment');
    commentA.appendChild(commentText);

    let arrowDown = document.createElement("i");
    arrowDown.setAttribute("class", "fa fa-sort-down");

    commentA.appendChild(arrowDown);

    commentDiv3.appendChild(commentA);
  
    let divide = document.createElement('div');
    divide.setAttribute('class', 'dropdown-divider');
  
    commentDiv3.appendChild(divide);
    cardDiv.appendChild(commentDiv3);

    let currentDiv = document.querySelector("#my-box");

    let chattingDiv = document.createElement("div");
    chattingDiv.setAttribute("class", "chattingDiv");

    let chattingLink = document.createElement("a");
    chattingLink.href = '/index.html';
    chattingLink.className = 'chattingLink';
    chattingLinkText = document.createTextNode("Start Chatting!");

    chattingLink.appendChild(chattingLinkText);

    chattingDiv.appendChild(chattingLink);

    currentDiv.appendChild(chattingDiv);
    currentDiv.appendChild(startDiv);

    chattingDiv.style.display = 'none';
  }
      
} 

//allPost() : myPost 게시글을 출력하기 전 거치는 ajax
function myPostAjax() {
  let url = 'http://192.168.1.136:8888/mypost/'+'1283902841946955';
  
  sendAjax(url, 'GET', null, function(res){
    console.log(res.response);
    var result = JSON.parse(res.response);
    
    showMyPost(result);
  });

  // for(let i = 0; i < postData.length; i++){
  //   allPostHtml(postData, i);
  // }
};

//mypost 페이지 들어왔을 시 바로 showMyPost() 함수가 호출되도록 함
if (window.addEventListener)
        window.addEventListener("load", myPostAjax, false);
else if (window.attachEvent)
      window.attachEvent("onload", myPostAjax);
else window.onload = myPostAjax;



//allComment(num) : myPost 게시글의 모든 댓글을 보는 함수
function allComment(resultData) {
  let num = resultData[0].p_id;
  let currentDiv = document.querySelector(".cardBody"+num);

  let checkNum = document.createElement('div');
  checkNum.setAttribute('id', 'checkNum');

  checkNum.innerHTML = 'Selectable number of accounts';

  currentDiv.appendChild(checkNum);

  let startDiv = document.createElement("div");
  startDiv.setAttribute("class", "card-body commentBody"+num);

  for(let i = 0; i<resultData.length; i++){
    if(num == resultData[i].p_id){
      let commentId = resultData[i].c_id;
      let commentW = document.createElement("div");
      commentW.setAttribute("class", "commentWrap comment"+commentId);

      let commentText = '';
      commentText += '<div> <p class="commentP"> <input type="checkbox" id="checkUser'+resultData[i].c_id+'" class="checkUser" onclick="checkUser(this)" name="'+resultData[i].c_id+'" value="'+ resultData[i].checkNum +'">' + resultData[i].nickname1;
      commentText += '</p> <div class="commentDiv"><img src="img/1_remote.png" style="width:60px; margin-right:20px"> <span id="commentLength'+commentId+'" class="commentLength">' + resultData[i].checkNum.length + "</span></div></div>";
      commentW.innerHTML = commentText;

      startDiv.appendChild(commentW);;

      let commentNickname = document.createElement("h5");
      commentNickname.setAttribute("class", "commentNick"+commentId);
      
      let commentNickText = document.createTextNode(resultData[i].nickname1+"'s");
      commentNickname.appendChild(commentNickText);

      startDiv.appendChild(commentNickname);

      commentNickname.style.display = 'none';

    }
  }

  let commentSubmit = document.createElement('input');
  commentSubmit.type = "button";
  commentSubmit.value = "submit";
  commentSubmit.className = "check-submit";
  commentSubmit.addEventListener('click', function(){
      showNick(resultData);
  });
  
  let comSub = document.createElement("div");
  comSub.setAttribute("class", "comSub");

  comSub.appendChild(commentSubmit);

  startDiv.appendChild(comSub);
  
  currentDiv.appendChild(startDiv);

  let arrowUp = document.getElementById("comment"+num);
  arrowUp.setAttribute('onclick', 'hideComment('+num+')');
  
  arrowUp.innerHTML = 'comment <i class="fa fa-sort-up"></i>';

  let commentBox = document.querySelector(".commentBody"+num);
  commentBox.style.display = 'block';  
}

//allPost() : myPost 게시글의 댓글을 출력하기 전 거치는 ajax
function allCommentAjax(num) {
  
  let url = 'http://192.168.1.136:8888/comment/'+num;
  
  const postId = num;
  
  sendAjax(url, 'GET', null, function(res){
    console.log(res.response);
    var result = JSON.parse(res.response);   
    allComment(result);
  });
};

//전역 변수 comment_id_names, c_id를 배열로 담는 변수다.
let comment_id_names = [];

//checkUser() : 같이할 유저 체크해 음수로 넘어가면 더이상 체크할 수 없게끔 하는 함수
function checkUser(resultData) {
  let checkedUser = document.getElementsByClassName("checkUser");
  console.log('check user : '+checkedUser);
  
  let sum = 0;
  let count = checkedUser.length;
  let temp=[];
  for(let i=0; i < count; i++ ){
    if( checkedUser[i].checked == true ){
      sum += parseInt(checkedUser[i].value.length);
      temp.push(checkedUser[i].name);
    }
  }
  comment_id_names = temp;
  checkedUser.value = sum;

  console.log(sum);

  let checkNum = document.querySelector("#checkNum");

  //MVC 패턴으로 찢을 때 다시 건드릴 부분
  let leftNum1 = 20 - ( postData[0].nPass +  postData[0].rPass + sum);
  let leftNum2 =  10 - ( postData[0].rPass + sum);
  let leftNum3 = 5 - sum;
  let leftNum = Math.min(leftNum1, leftNum2, leftNum3);

  console.log("최솟값 " + leftNum);

  if(leftNum >= 0) {
    checkNum.innerHTML = 'Selectable number of accounts : ' + leftNum;
  } else {
    alert("Can't select anymore");
    for(let i=0; i < count; i++ ){
      checkedUser[i].checked = false;
    }
    checkNum.innerHTML = 'Please select again';
  }
}

//showNick() : 선택한 유저의 닉네임과 친구코드를 보여주는 함수
function showNick(resultData) {

  // const addData = {
  //   p_id : resultData[0].p_id,
  //   c_id : comment_id_names
  // }

  // const strObject = JSON.stringify(addData);
  
  // console.log(strObject);

  // var url = 'http://192.168.1.136:8888/mypost';
  // sendAjax(url, 'PUT', strObject);

  console.log(resultData)
  console.log('arr length = '+comment_id_names);
  console.log(typeof(comment_id_names));
  console.log(comment_id_names);

  if(confirm("Did you check the user's nickname well?")){
    //모든 사람이 단 댓글을 순회
    for(let i = 0; i < resultData.length; i++){

      //순회하면서 전역변수에 들어있던 배열 안에 들어있는 원소와 commentData의 c_id가 같다면
      if(comment_id_names.includes(resultData[i].c_id)){

        // 원소와 같은 c_id 가 들어있는 객체 내의 checkNum의 길이를 또 순회
        for(let j = 0; j< resultData[i].checkNum.length; j++){
          
          //checkNum을 찢어서 변수에 담음
          let onePersonCheckNum= resultData[i].checkNum[j];
          
          //onePersonCheckNum의 숫자를 확인하는 switch문
          switch(onePersonCheckNum){
            case '1' :
              // 만일 onePersonCheckNum이 1이라면 그에 해당하는 nickname과 friendcode를 함수에 넣는다. 
              htmlMaker(resultData[i].nickname1, resultData[i].friendCode1, resultData[i].c_id);
              break;
            case '2' : 
              htmlMaker(resultData[i].nickname2, resultData[i].friendCode2, resultData[i].c_id);
              break;
            case '3' : 
              htmlMaker(resultData[i].nickname3, resultData[i].friendCode3, resultData[i].c_id);
              break;
            case '4' : 
              htmlMaker(resultData[i].nickname4, resultData[i].friendCode4, resultData[i].c_id); 
              break;
            case '5' : 
              htmlMaker(resultData[i].nickname5, resultData[i].friendCode5, resultData[i].c_id);
              break;
          }
        }
      }
    }
    //위의 잔여 숫자를 지워준다.
    let checkNum = document.querySelector("#checkNum");
    checkNum.style.display = 'none';    
  } else {
    alert('You canceled it.');
  }
}


//htmlMaker() : 그 사람의 nickname과 friendCode를 담아 view로 보여주는 함수
function htmlMaker(nickname, friendCode, c_id){
  console.log('htmlMaker : ' + nickname, friendCode );
  
  let commentNickname = document.querySelector(".commentNick"+c_id);
  commentNickname.style.display = 'block';


  let resultDiv = document.createElement("div");
  resultDiv.setAttribute("class", "checkResult");

  let onePersonInfo = '';
  onePersonInfo += 'nickname : ' + nickname + '</br> friendCode :' + friendCode+'</br>';
  
  //commentBox 안의 내용물을 변경
  resultDiv.innerHTML = onePersonInfo;

  commentNickname.appendChild(resultDiv);

  let commentWrap = document.getElementsByClassName("commentWrap");

  for(let i = 0; i<commentWrap.length; i++){
    commentWrap[i].style.display = 'none';
  }

  let comSub = document.querySelector(".comSub");
  comSub.style.display = 'none';

  let chattingDiv = document.querySelector(".chattingDiv");
  chattingDiv.style.display = 'block';

}
  
//hideComment() : 모든 댓글을 숨기고 보여주는 함수.
function hideComment(num) {
  let commentBox = document.querySelector(".commentBody"+num);
  let arrowDown = document.getElementById("comment"+num);

  if(commentBox.style.display == 'block'){
      commentBox.style.display = 'none';
      arrowDown.innerHTML = 'comment <i class="fa fa-sort-down"></i>';
  } else {
      commentBox.style.display = 'block';
      arrowDown.innerHTML = 'comment <i class="fa fa-sort-up"></i>';
  }
}

function endPost(num) {

  let currentDiv = document.querySelector("#my-box");

  if(confirm('Are you sure you want to end the raid?')){

    const addData = { p_id : num}

    const strObject = JSON.stringify(addData);
    
    console.log(strObject);

    var url = 'http://192.168.1.136:8888/mypost/end';
    sendAjax(url, 'POST', strObject);


    let endPage = document.createElement("div");
    endPage.setAttribute("class", "card-body endBody");

    endStr = '<p class="endStr">Nothing!</p>';

    endPage.innerHTML = endStr;

    currentDiv.appendChild(endPage);

    let resultDiv = document.querySelector("#result-box");
    currentDiv.removeChild(resultDiv);

  } else {
    alert('You canceled it');
  }
}