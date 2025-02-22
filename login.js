const userName= document.getElementById("loginUserName");
const password= document.getElementById("loginpassword");
const submit= document.getElementById("loginsubmitbutton");
// let usernameValue =document.querySelector("#loginUserName").value;
// let passwordValue =document.querySelector("#loginpassword").value;
let data = JSON.parse(localStorage.getItem("data"));
console.log(data.username);
submit.addEventListener("click",()=>{
if(data){
    if(userName.value===data.username && password.value ===data.password){
        window.location.href = "http://127.0.0.1:5500/main.html"; // Belirtilen sayfaya gider
        
    }else{
        alert("Səhv İstifadəçi adı və ya Parol yanlışdır")
    }}});


   



// data-read.js





    
    
    

