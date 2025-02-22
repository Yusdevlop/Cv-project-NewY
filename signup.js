const userName =document.getElementById("userNameInput");
const gmail =document.getElementById("gmailInput");
const password =document.getElementById("passwordInput");
const submit =document.getElementById("submitbox");


submit.addEventListener("click",()=>{
    if(userName.value=="" && gmail.value=="" && password.value==""){
        alert("Bos olanmaz")
    }else{
        let data = {
            "username" : userName.value,
            "gmail":gmail.value,
            "password":password.value
            
        }
        let convertedData = JSON.stringify(data)
            localStorage.setItem("data",convertedData)
            window.location.href = "http://127.0.0.1:5500/loginpage.html";
            // Belirtilen sayfaya gider
    }
    
    

});







