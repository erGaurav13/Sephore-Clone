

//- Navbar
    window.addEventListener("scroll", function () {
    scrollFunction();
  });

  function scrollFunction() {
    if (document.documentElement.scrollTop > 243) {
      let x = document.querySelector("#sticky");
      x.style.visibility = "visible"; //= "block";
      x.style.display = "flex";
      // console.log(x);
      // console.log("scroll function", scroll);
    } else {
      let x = document.querySelector("#sticky");
      x.style.display = "none";
      console.log(
        "scroll function yet to reach ",
        document.documentElement.scrollTop
      );
    }
  }


// Login

   document.getElementById("top").addEventListener("click", function () {
    document.documentElement.scrollTop = 0;
  });
  document.getElementById("container_login").style.display = "none";
  function login() {
    console.log(document.getElementById("container_login"));
    document.getElementById("container_login").style.display = "block";
    document.querySelector("body").disabled = true;
  }

  function closeLogin(){
    document.getElementById("container_login").style.display = "none";
  }

  let arrFrmLS = JSON.parse(localStorage.getItem("userData")) || [];
  document.querySelector("#form1").addEventListener("submit", mySignIn);

  function mySignIn(event) {
    event.preventDefault();

    checkEmailPwd(arrFrmLS);
  }
  function checkEmailPwd(arrFrmLS) {
    let flagx=0;
    arrFrmLS.forEach(function (el) {
      let iUserEmail = document.querySelector("#ipMail").value;
      let iUserPwd = document.querySelector("#ipPassword").value;

      if (el.userEmail == iUserEmail && el.userPwd == iUserPwd) {
        flagx=1;
        localStorage.setItem("userName",el.userName);
      } else if (el.userEmail == iUserEmail || el.userPwd == iUserPwd) {
        flagx=2;
      } 
    });

    if(flagx==1){
        alert("Login Sucessful!");
        localStorage.setItem("islogin", true);
        window.location.href = "sale.html";
    }else if(flagx==2){
        alert("Entered Email or Password are wrong!");
        localStorage.setItem("islogin", false);

    }else {
        alert("Entered Credentials are wrong, Please Create Account!");
        localStorage.setItem("islogin", false);
        window.location.href = "SignUp.html";
    }
  }


  // login option for navmid
   let x=localStorage.getItem("islogin")||"false";
   let user = localStorage.getItem("userName");

 if(x=="false"){
      document.querySelector("#logDiv").innerHTML= '<div onclick="login()"><span class="material-symbols-outlined"> person </span> Login</div>';
      // document.querySelector("#logDiv").style.display = "1px";
 }else 
    if(x=="true"){
      let loginDiv= document.querySelector("#logDiv");
      loginDiv.innerHTML = "";
      let select  =  document.createElement("select");
      select.style.border = "none";
      select.setAttribute("id","logOut");
      select.setAttribute("onchange","logoutFun()");
      let opt1 = document.createElement("option");
      opt1.innerHTML = '<span onclick="" class="material-symbols-outlined"> person </span>';
      opt1.innerText = user;
      let opt2 = document.createElement("option");
      opt2.setAttribute("value", "log_out")
      opt2.innerText="Log Out";
      select.append(opt1,opt2);
      loginDiv.append(select);
      console.log(opt2,select,user);
    } 
    function logoutFun(){
    let logSelect = document.querySelector("#logOut").value;
    if(logSelect=="log_out"){
          localStorage.setItem("islogin", false);
          window.location.reload();
    }
 }

       // login option for sticky
 if(x=="false"){
      document.querySelector("#logDivSticky").innerHTML= '<div onclick="login()"><span class="material-symbols-outlined"> person </span> Login</div>';
      // document.querySelector("#logDiv").style. = "1px";
 }else 
    if(x=="true"){
      let loginDiv= document.querySelector("#logDivSticky");
      loginDiv.innerHTML = "";
      let select  =  document.createElement("select");
      select.style.border = "none";
      select.setAttribute("id","logOut1");
      select.setAttribute("onchange","logoutFun()");
      let opt1 = document.createElement("option");
      opt1.innerHTML = '<span onclick="" class="material-symbols-outlined"> person </span>';
      opt1.innerText = user;
      let opt2 = document.createElement("option");
      opt2.setAttribute("value", "log_out")
      opt2.innerText="Log Out";
      select.append(opt1,opt2);
      loginDiv.append(select);
      console.log(opt2,select,user);
    } 
    

