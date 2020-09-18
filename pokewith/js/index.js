
//Post 더미 데이터
const postData = [
    { p_id : 1,
      nickname1 : 'rayra',
      u_like : '20',
      u_hate : '10',
      pokemon : '이상해씨',
      raidLevel : 1,
      startTime : '03:30',
      endTime : '04:15',
      minLevel : 20,
      nPass : 3,
      rPass : 0,
      p_end : 0},
  
    { p_id : 2,
      nickname1 : 'rora',
      u_like : '24',
      u_hate : '10',
      pokemon : '리자몽',
      raidLevel : 3,
      startTime : '03:30',
      endTime : '04:15',
      minLevel : 30,
      nPass : 0,
      rPass : 1,
      p_end : 0 },
  
    { p_id : 3,
      nickname1 : '야돈',
      u_like : '11',
      u_hate : '10',
      pokemon : '리자몽',
      raidLevel : 5,
      startTime : '03:30',
      endTime : '04:15',
      minLevel : 40,
      nPass : 5,
      rPass : 0,
      p_end : 1 },
  
    { p_id : 4,
      nickname1 : 'maylin',
      u_like : '21',
      u_hate : '15',
      pokemon : '히드런',
      raidLevel : 'mega',
      startTime : '03:30',
      endTime : '04:15',
      minLevel : 40,
      nPass : 3,
      rPass : 1,
      p_end : 1 },
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
      "u_like": "3",
      "u_hate": "0"
    },
    { "c_id": "3",
      "p_id": "1",
      "userId": "2649416911892763",
      "checkNum": "134",
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
      "u_like":"3",
      "u_hate":"0"
    },
  ]
  
  
  //밖에서 ajax 코드를 빼고
  //response 값을 받아서
  /*
  app
  ajax data 
  const result = response
  
  view.allPostHtml(result, n)
  */
  
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
  
  //allPostHtml() : 전체 게시글 출력 함수
  function allPostHtml(requiredData, n){
  
    let num = requiredData[n].p_id;
    console.log(num);
      
      let startDiv = document.createElement("div");
      startDiv.setAttribute("class", "card shadow mb-4");
      startDiv.setAttribute("id", "result-box");
  
      let nickDiv = document.createElement("div");
      nickDiv.setAttribute("class", "card-header py-3 d-flex flex-row align-items-center justify-content-between");
  
      let nickName = '';
      nickName += '<p class="m-0 text-gray"><b>'+requiredData[n].nickname1
                  + '</b><i class="fa fa-thumbs-up updown" aria-hidden="true" style="font-size:10px"></i>' + requiredData[n].u_like
                  + ' <i class="fa fa-thumbs-down" aria-hidden="true" style="font-size:10px"></i>' + requiredData[n].u_hate
                  + '</p> <div><i id="delete'+num+'" onclick="deletePost('+num+')" class="fas fa-times"></i>'
      nickDiv.innerHTML = nickName;
  
      startDiv.appendChild(nickDiv);
  
      let cardDiv = document.createElement("div");
      cardDiv.setAttribute("class", "card-body cardBody"+num);
      startDiv.appendChild(cardDiv);
  
      if(requiredData[n].raidLevel == '1') {
          str = "<img src = 'img/1.PNG' style='width:50px'>"
      } else if(requiredData[n].raidLevel == '3') {
          str = "<img src = 'img/3.PNG' style='width:50px'>"
      } else if(requiredData[n].raidLevel == '5') {
          str = "<img src = 'img/5.PNG' style='width:50px'>"
      } else {
          str = "<img src = 'img/mega.PNG' style='width:50px'>"
      }
      
      cardDiv.innerHTML += '<input type="hidden" id="postId" name="postId" value="'+ requiredData[n].p_id +'">';
      cardDiv.innerHTML += '<p> Pokemon : ' + requiredData[n].pokemon+'</p>';
      cardDiv.innerHTML += '<p> Level of Raid : ' + str + '</p>';
      cardDiv.innerHTML += '<p> Start Time of Raid : ' + requiredData[n].startTime+'</p>';
      cardDiv.innerHTML += '<p> End Time of Raid : ' + requiredData[n].endTime+'</p>';
      cardDiv.innerHTML += '<p> Required Player Level : ' + requiredData[n].minLevel+'</p>';
      cardDiv.innerHTML += '<p> Premium Pass : <img src="img/3_premium.png" style="width:60px"> / <img src="img/2_premium.png" style="width:50px">' + requiredData[n].nPass+'</p>';
      cardDiv.innerHTML += '<p> Remote Pass : <img src="img/1_remote.png" style="width:60px"> ' + requiredData[n].rPass + '</p>';
  
      let commentDiv3 = document.createElement('div');
      commentDiv3.setAttribute('class', 'commentBox');
      commentDiv3.setAttribute('id', 'commentBox');
  
      let commentA = document.createElement('button');
      commentA.setAttribute('id', 'comment'+num)
      commentA.setAttribute('class', 'hide-link');
      commentA.setAttribute('onclick', 'allComment('+num+')');
      
      
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
      
      let postbox = document.querySelector("#post-box");
      postbox.appendChild(startDiv);
      
      
  
  }
  
  //allPost() : post 전체 보기 함수
  function allPost() {
    var url = 'http://192.168.1.136:8888/index';
    
    sendAjax(url, 'GET', null, function(res){
      console.log(res.response);
      var result = JSON.parse(res.response);
      for(let i = 0; i < result.length; i++){
        allPostHtml(result, i);
      }
    });
  };
  
  //윈도우가 로드될 때 allPost()를 실행시키기 위한 함수
  if (window.addEventListener)
          window.addEventListener("load", allPost, false);
  else if (window.attachEvent)
        window.attachEvent("onload", allPost);
  else window.onload = allPost;
  
  //post 버튼에 onClick 함수 binding
  let postBtn = document.getElementById('post-btn');
  postBtn.addEventListener('click',createPost);
  
  
  //createPost() : 새로운 post 생성 함수
  function createPost(){
  
    let newDiv = document.createElement("div");
    newDiv.setAttribute("class", "card shadow mb-4 sticky-top");
    newDiv.setAttribute("id", "cardBox");
  
    let newDiv2 = document.createElement("div");
    newDiv2.setAttribute("class", "card-header py-3");
  
    let str = "";
    str += "<div class='card-body'>";
    str += `
      <p>pokemon : <input type='text' id='pokemon' name='pokemon' placeholder='pokemon of number'></p>
      <p>Level of Raid : <select name="searchYear" id="raidLevel" name="raidLevel">
                            <option value="1">1</option>
                            <option value="3">3</option>
                            <option value="5">5</option>
                            <option value="mega">mega</option>
                         </select>
      <p>Start Time of Raid : <input type='time' id='startTime' name='startTime'></p>
      <p>End Time of Raid : <input type='time' id='endTime' name='endTime'></p>
      <p>Minimum Level of Raid : <input type='number' id='minLevel' name='minLevel' value='minLevel'></p>
      <p>Premium Pass : <input type='number' id='nPass' name='nPass' value='nPass'></p>
      <p>Remote Pass : <input type='number' id='rPass' name='rPass' value='rPass'></p>
    `;
    newDiv2.innerHTML = str;
  
    newDiv.appendChild(newDiv2);
  
    let newDiv3 = document.createElement("div");
    newDiv3.setAttribute("class", "d-flex justify-content-end");
    
    let submitBtn = document.createElement("button");
    submitBtn.setAttribute("class", "border-0 btn-info comment-btn");
    submitBtn.setAttribute("id", "submit-btn");
    submitBtn.setAttribute("value", "submit");
  
    let submitText = document.createTextNode('submit');
    submitBtn.appendChild(submitText);
  
    newDiv3.appendChild(submitBtn);
    newDiv2.appendChild(newDiv3);
  
    let postbox = document.querySelector("#post-box");
    postbox.appendChild(newDiv);
  
    submitBtn.addEventListener('click', addPost);
    submitBtn.addEventListener('click', hidePost);
  }
  
  //addPost() : 기존 게시글에 새 게시글의 데이터를 더하는 함수
  function addPost(){
    alert("포스트가 성공적으로 등록되었습니다.");
    const addData = {
      pokemon : document.getElementById("pokemon").value,
      raidLevel : document.getElementById("raidLevel").value,
      startTime : document.getElementById("startTime").value,
      endTime : document.getElementById("endTime").value,
      minLevel : document.getElementById("minLevel").value,
      nPass : document.getElementById("nPass").value,
      rPass : document.getElementById("rPass").value,
    }
  
    const strObject = JSON.stringify(addData);
  
    var url = 'http://192.168.1.136:8888/index';
    sendAjax(url, 'POST', strObject);
  
    // 밑 부분은 앞으로 서버랑 연결할 때 필요 없는 부분
    // postData.push(addData);
  
    // console.log(postData.push(addData));
    // console.log(postData);
  
    // allPostHtml(addData, postData.length-1);
  }
  
  //hidePost() : 새 게시글을 생성하는 템플릿을 삭제하는 함수
  function hidePost(){
    let cardBox = document.querySelector( "#cardBox" );
    let postBox = document.querySelector( "#post-box" );
  
    postBox.removeChild(cardBox); 
  
  }
  
  
  //allComment() : 특정 포스트의 모든 댓글을 출력하는 함수
  function allComment(num) {
    let currentDiv = document.querySelector(".cardBody"+num);
  
    let startDiv = document.createElement("div");
    startDiv.setAttribute("class", "card-body commentBody"+num);
  
    for(let i = 0; i<commentData.length; i++){
      if(num == commentData[i].p_id){
        let commentId = commentData[i].c_id;
        let commentW = document.createElement("div");
        commentW.setAttribute("class", "comment"+commentId);
  
        let commentText = '';
        commentText += '<p>' + commentData[i].nickname1 + "</p>";
        commentText += '<p> <img src="img/1_remote.png" style="width:60px">' + commentData[i].checkNum.length + "</p>";
        commentW.innerHTML = commentText;
  
        startDiv.appendChild(commentW);
      }
    }
  
    let commentForm = document.createElement("div");
    commentForm.setAttribute('class', 'comment-wrap wrap'+ num);
  
    var str = "";
    str+="<span class='checked'><input type='checkbox' name='nickname"+num+"' value='1'> 1. nick1</span>";
    str+="<span class='checked'><input type='checkbox' name='nickname"+num+"' value='2'> 2. nick2</span>";
    str+="<span class='checked'><input type='checkbox' name='nickname"+num+"' value='3'> 3. nick3</span>";
    str+="<span class='checked'><input type='checkbox' name='nickname"+num+"' value='4'> 4. nick4</span>";
    str+="<span class='checked'><input type='checkbox' name='nickname"+num+"' value='5'> 5. nick5 </span></br>";
    
    commentForm.innerHTML = str;
  
    commentSubmit = document.createElement('input');
    commentSubmit.setAttribute('class', 'comment-submit');
    commentSubmit.setAttribute('type', 'submit');
    commentSubmit.setAttribute('value', 'submit');
    // commentSubmit.setAttribute('onclick', 'commitComment('++')')
  
    commentForm.appendChild(commentSubmit);
  
    startDiv.appendChild(commentForm);
    
    currentDiv.appendChild(startDiv);
  
    var arrowUp = document.getElementById("comment"+num);
    arrowUp.setAttribute('onclick', 'hideComment('+num+')');
    
    arrowUp.innerHTML = 'comment <i class="fa fa-sort-up"></i>';
  
    var commentBox = document.querySelector(".commentBody"+num);
    commentBox.style.display = 'block';
  
  }
  
  //hideComment() : 특정 포스트의 모든 댓글을 숨기고 보여주는 함수.
  function hideComment(num) {
    var commentBox = document.querySelector(".commentBody"+num);
    var arrowDown = document.getElementById("comment"+num);
  
    if(commentBox.style.display == 'block'){
      commentBox.style.display = 'none';
      arrowDown.innerHTML = 'comment <i class="fa fa-sort-down"></i>';
    } else {
      commentBox.style.display = 'block';
      arrowDown.innerHTML = 'comment <i class="fa fa-sort-up"></i>';
    }
  }
  
  
  function commitComment(num) {
      var check_count = document.getElementsByName("nickname"+num).length;
  
      console.log(check_count);
  
      var newDiv = document.createElement("div");
      newDiv.setAttribute('class', 'card-body');
  
      var newDiv2 = document.createElement("div");
      newDiv2.setAttribute('class', 'nickname');
      newDiv2.setAttribute('id', 'nickName' + num);
      newDiv.appendChild(newDiv2);
  
      var newCheck = document.createElement("input");
      newCheck.setAttribute('class', 'checkUser');
      newCheck.setAttribute('type', 'radio');
      newCheck.setAttribute('value', 'selecting');
      newDiv2.appendChild(newCheck);
      
      var sum = 0;
      var result = '';   
      for (var i=0; i<check_count; i++) {
          if (document.getElementsByName("nickname"+num)[i].checked == true) {
              var checkedStr = document.getElementsByName("nickname"+num)[i].value;
              sum += checkedStr.length;
              result += checkedStr;        
          }
      }
      var str = '';
      str += '<input type="radio" id="checkUser'+ num +'" onclick="checkedUser('+ result + ',' + num +')" value="nickname1"> ';
      str += 'nickname1 <img src="img/1_remote.png" style="width:60px"> '
      str += '<img src="/img/delete-icon.png" id="deleteComment'+num+'" onclick="deleteComment('+num+')" onmouseover="hoverComment('+num+')" onmouseout="normalComment('+num+')" class="delete">';
      str += sum + '</br>';
      newDiv2.innerHTML = str;
      
      var commentBox = document.querySelector(".comment-box"+num);
      commentBox.appendChild(newDiv2);
      
      var commentWrap = document.querySelector(".wrap" + num);
      commentWrap.style.display = 'none';
  }
  
  function checkedUser(result, num) {
  
    //ajax = {checknum : '24', p_id : 10}; / method = POST
  
  
    var data = [{ 
        friendCode1: '234039304433',
        friendCode2: '534039304339',
        friendCode3: '264079308433',
        friendCode4: '434930206473',
        friendCode5: '834939314353'
      }]
    var data2 = [{ 
      nickname1: 'nickname1',
      nickname2: 'nickname2',
      nickname3: 'nickname3',
      nickname4: 'nickname4',
      nickname5: 'nickname5'
    }]
  
    var checkedUser = document.getElementById("checkUser" + num);
    if(checkedUser.checked == true) {
      var nickNameBox = document.querySelector('#nickName' + num);  
      var newP = document.createElement("p");
      var arr = [];
      var arr2 = [];
      
      document.getElementById("nickName" + num).style.border = "thick solid #0000FF";
      document.getElementById("checkUser" + num).style.display = 'none';
      console.log(result.toString());
      result = result.toString();
      str = '';
      for (var i = 0 ; i < result.length; i++){
        if(result[i] == '1'){
          arr.push(data[0].friendCode1);
          arr2.push(data2[0].nickname1);
        } else if (result[i] == '2') {
          arr.push(data[0].friendCode2);
          arr2.push(data2[0].nickname2);
        } else if (result[i] == '3') {
          arr.push(data[0].friendCode3);
          arr2.push(data2[0].nickname3);
        } else if (result[i] == '4') {
          arr.push(data[0].friendCode4);
          arr2.push(data2[0].nickname4);
        } else {
          arr.push(data[0].friendCode5);
          arr2.push(data2[0].nickname5);
        }
        str += arr2[i] + ' ' + arr[i] + '</br>';
      }
      console.log(arr);
      newP.innerHTML = str;
      nickNameBox.appendChild(newP);
    }
  }
  
  function hideCommentBox(num) {
      var vomit = document.querySelector('.comment-box'+num);
      
      if(vomit.style.display == 'none'){
          vomit.style.display = 'block';
      }else {
          vomit.style.display = 'none';
      }
  }
  
  function hover(number) {
    var deleteImg = document.querySelector('#delete'+number);
    
    deleteImg.setAttribute('src', "img/delete-hover.png"); 
    deleteImg.setAttribute('id', "delete" + number);
    deleteImg.setAttribute('class', "delete");
    deleteImg.setAttribute('onmouseover', 'hover('+number+')');
    deleteImg.setAttribute('onmouseout', 'normalImg('+number+')');
  }
  
  function normalImg(number) {
    var deleteImg = document.querySelector('#delete'+number);
    
    deleteImg.setAttribute('src', "img/delete-icon.png"); 
    deleteImg.setAttribute('id', "delete" + number);
    deleteImg.setAttribute('class', "delete");
    deleteImg.setAttribute('onmouseover', 'hover('+number+')');
    deleteImg.setAttribute('onmouseout', 'normalImg('+number+')');
  }
  
  function hoverComment(num) {
    var deleteImg = document.querySelector('#deleteComment'+num);
    
    deleteImg.setAttribute('src', "img/delete-hover.png"); 
    deleteImg.setAttribute('id', "deleteComment" + num);
    deleteImg.setAttribute('class', "delete");
    deleteImg.setAttribute('onmouseover', 'hoverComment('+num+')');
    deleteImg.setAttribute('onmouseout', 'normalComment('+num+')');
  }
  
  function normalComment(num) {
    var deleteImg = document.querySelector('#deleteComment'+num);
    
    deleteImg.setAttribute('src', "img/delete-icon.png"); 
    deleteImg.setAttribute('id', "deleteComment" + num);
    deleteImg.setAttribute('class', "delete");
    deleteImg.setAttribute('onmouseover', 'hoverComment('+num+')');
    deleteImg.setAttribute('onmouseout', 'normalComment('+num+')');
  }
  
  function deletePost(num){
    var cardBox = document.querySelector(".card"+num);
    var postBox = document.querySelector("#post-box");
    var cardBody = document.querySelector(".cardBody"+num);
    var commentBox = document.querySelector(".comment-box"+num);
    
    cardBox.removeChild(cardBody);
    cardBox.removeChild(commentBox);
    postBox.removeChild(cardBox);
  }
  
  function deleteComment(num){
    var commentBox = document.querySelector(".comment-box"+num);
    var nickNameBox = document.querySelector("#nickName"+num);
    var commentWrap = document.querySelector('.wrap' + num);
    
    commentBox.removeChild(nickNameBox);
    commentWrap.style.display = 'block';
  }
  
  