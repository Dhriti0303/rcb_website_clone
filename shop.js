 const item1=document.getElementById("item1")
 const item2=document.getElementById("item2")
 const item3=document.getElementById("item3")
 const item4=document.getElementById("item4")
 const item5=document.getElementById("item5")
 const item6=document.getElementById("item6")
 const item8=document.getElementById("item8")
 const item7=document.getElementById("item7")
 const item9=document.getElementById("item9")
 const item10=document.getElementById("item10")
 const item11=document.getElementById("item11")
 const item12=document.getElementById("item12")
 const main=document.getElementById("main")
 const login=document.getElementById("login")
 const items=[item1,item2,item3,item4,item6,item6,item7,item8,item9,item10,item11,item12];
 for(let i=0;i<12;i++){
items[i].addEventListener("click",()=>{  
    main.style.display="none";    
    login.style.display="block";  
})}
const span=document.querySelector("span")
span.addEventListener("click",()=>{
    main.style.display="flex";    
    login.style.display="none";    
})