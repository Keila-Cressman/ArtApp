const userData = {
  name:"",
  password:"",
  setName: function(name){
    this.name=name;
    localStorage.setItem("setName", name);
  },
  getName: function(){
    return users.name;
  },
  setPass:function(pass){
    this.password = pass;
    localStorage.setItem("setPass", pass);
  },
  getPass: function(){
    return users.password;
  }
};

// import { userData } from "./userData";

let userName = document.getElementById("username");
let userPass = document.getElementById("password");
let newUser = document.getElementById("newUser");

function verifyUser(){
  if (userName.value == "" || userPass.value == "") {
    alert("Enter a new Username or Password");
  }
  else if ((userData.name.toLowerCase() == userName.value.toLowerCase() &&
    userData.password.toLowerCase() == userPass.value.toLowerCase()) ||
    (localStorage.getItem("setName").toLowerCase() == userName.value.toLowerCase() &&
    localStorage.getItem("setPass").toLowerCase() == userPass.value.toLowerCase())) {
    location.href = "../blog/blog.html";
  }
  else{
    alert("Not the correct username/password");
  }
}

function createUser(){
  if (userName.value == "" || userPass.value == ""){
    alert("Enter a new Username or Password");
  }else{
    userData.setName(userName.value);
    userData.setPass(userPass.value);
    let p = document.createElement("p");
    p.innerHTML = "User Created - now log in with credentials";
    newUser.appendChild(p);
  }
  
}
