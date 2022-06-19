

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



function displayLogin(){   
    let div1=document.createElement("div");
    div1.setAttribute("id", "login_main");
    let div2=document.createElement("div");
    div2.setAttribute("id", "cross");
    div2.setAttribute("onclick", "closeLogin()");
    let img1=document.createElement("img");
    img1.setAttribute("id", "crossSymb");
    img1.setAttribute("src", "https://thumbs.dreamstime.com/b/red-cross-symbol-icon-as-delete-remove-fail-failure-incorr-incorrect-answer-89999776.jpg");
    div2.append(img1);
    h1=document.createElement("h1");
    h1.innerText="LOGIN";
    let form=document.createElement("form");
    form.setAttribute("id","form1");
    let label1=document.createElement("label");
    label1.innerText="Email";
    let input1=document.createElement("input");
    input1.setAttribute("id","ipMail");
    input1.setAttribute("type","email");
    input1.setAttribute("placeholder","Enter email");
    let br1=document.createElement("br");
    let label2=document.createElement("label");
    label2.innerText="Password";
    let input2=document.createElement("input");
    input2.setAttribute("id","ipPassword");
    input2.setAttribute("type","password");
    input2.setAttribute("placeholder","Enter password");
    let br2=document.createElement("br");
    let input3=document.createElement("input");
    input3.setAttribute("id","signin");
    input3.setAttribute("type","submit");
    input3.setAttribute("value","SIGN IN");
    let p1=document.createElement("p");
    p1.innerText="Or";
    let button1=document.createElement("button");
    button1.setAttribute("tabindex","0");
    button1.setAttribute("type","button");
    let img2=document.createElement("img");
    img2.setAttribute("src", "https://static.nnnow.com/google-social-login.svg");
    img2.setAttribute("alt", "Google Icon");
    let div3=document.createElement("div");
    div3.innerText="Continue with Google";
    button1.append(img2,div3);
    let button2=document.createElement("button");
    button2.setAttribute("tabindex","0");
    button2.setAttribute("type","button");
    let img3=document.createElement("img");
    img3.setAttribute("src", "https://static.nnnow.com/facebook.png");
    img3.setAttribute("alt", "Facebook Icon");
    let div4=document.createElement("div");
    div4.innerText="Continue with Facebook";
    button2.append(img3,div4);
    let p2=document.createElement("p");
    p2.innerText="Don't have an account?";
    let span1=document.createElement("span");
    let a1=document.createElement("a");
    a1.setAttribute("href", "SignUp.html");
    a1.style.color="#ff3399";
    a1.innerText="Sign Up";
    span1.append(a1);
    p2.append(span1);
    let p3=document.createElement("p");
    p3.innerText="By proceeding, you agree to";
    let span2=document.createElement("span");
    let a2=document.createElement("a");
    a2.setAttribute("href", "privacy.html");
    a2.setAttribute("id","privacy");
    a2.innerText="Privacy Policy, Terms & Conditions";
    span2.append(a2);
    p3.append(span2);
    form.append(label1, input1, br1, label2, input2, br2, input3, p1, button1, button2, p2, p3);
    div1.append(div2, h1, form);
    document.querySelector("#container_login").append(div1);
}
displayLogin();

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
      window.location.href = "homepage.html";
  }else if(flagx==2){
      alert("Entered Email or Password are wrong!");
      localStorage.setItem("islogin", false);

  }else {
      alert("Entered Credentials are wrong, Please Create Account!");
      localStorage.setItem("islogin", false);
      window.location.href = "SignUp.html";
  }
}
let x=localStorage.getItem("islogin")|| "false";
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
    

