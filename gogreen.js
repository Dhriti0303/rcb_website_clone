const agree=document.getElementById("agree")
const main=document.querySelector("main")
const span=document.querySelector("span")
const login=document.getElementById("login")
    agree.addEventListener("click",()=>{
        login.style.display="block";
        console.log("done")
    })
span.addEventListener("click",()=>{
     login.style.display="none"
    })