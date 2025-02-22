let title = document.querySelector("#Name")


let data = JSON.parse(localStorage.getItem("data"));
console.log(!!data)

if(!!data){
    
title.innerHTML=data.username

}else{
    
title.innerHTML="User"

}


const data2 =[
    {
        title :"Work Name Here",
        descpriton:"Lorem ipsum dolor sit amet, consectetur  adipiscing elit, sed do eiusmod tempor incididunt <br> ut labore et dolore magna aliqua. sed do eiusmod  tempor incididunt ut labore et dolore magna."
    },
    {
        title :"Work Name Here",
        descpriton:"Lorem ipsum dolor sit amet, consectetur  adipiscing elit, sed do eiusmod tempor incididunt <br> ut labore et dolore magna aliqua. sed do eiusmod  tempor incididunt ut labore et dolore magna."
    },
    {
        title :"Work Name Here",
        descpriton:"Lorem ipsum dolor sit amet, consectetur  adipiscing elit, sed do eiusmod tempor incididunt <br> ut labore et dolore magna aliqua. sed do eiusmod  tempor incididunt ut labore et dolore magna."
    }
]






