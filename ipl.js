const images=document.getElementById("images");
const img1=document.getElementById("img1");
const img2=document.getElementById("img2");
const img3=document.getElementById("img3");
const img4=document.getElementById("img4");
const img5=document.getElementById("img5");
const first=document.getElementById("first")
const second=document.getElementById("second")
const third=document.getElementById("third")
const para=document.getElementById("para")
const link=document.getElementById("link")
const img=[img1,img2,img3,img4,img5];
function image(){
    for (let i=0;i<5;i++){
        img[i].style.background="white";
        }
}
for (let i=0;i<5;i++){
img[i].addEventListener("click",()=>{
    image();
    console.log("clicked")
img[i].style.background="red";
if(img1.style.background=="red"){
    images.src="img1.jfif";  
    first.innerHTML="THE FIRE THAT HE IGNITED –" 
    second.innerHTML="HARBHAJAN SINGH LAUDS VIRAT"
    third.innerHTML=" KHOLI'S CAPTAINCY"
    para.addEventListener("click",()=>{
    link.href="https://www.timesofsports.com/cricket/news/harbhajan-singh-lauds-virat-kohlis-captaincy/";
    })
}
else if(img2.style.background=="red"){
    images.src="img2.jpg"; 
    first.innerHTML="INDIA-W HOPEFUL OF TURNAROUND "   
    second.innerHTML=" AS ARCH-RIVALS PAKISTAN "
    third.innerHTML=" PRESENTSBIG CHALLENGE" 
   para.addEventListener("click",()=>{
    link.href="https://www.indiatoday.in/sports/cricket/story/shafali-verma-captain-harmanpreet-kaur-world-cup-dream-uae-2611164-2024-10-04";
})
}
else if(img3.style.background=="red"){
    images.src="img3.jpg"; 
    first.innerHTML="BATTERS STUMBLE AS INDIA-W"  
     second.innerHTML=" GET OFF TO A BUMPY START IN"
    third.innerHTML="WOMEN'S T20 WORLD CUP"
     para.addEventListener("click",()=>{
    link.href="https://www.hindustantimes.com/cricket/indias-world-cup-off-to-a-rough-start-101728065163482.html";
     })
}
else if(img4.style.background=="red"){
    images.src="img4.jpg";   
    first.innerHTML="WE DIDN'T PLAY OUR BEST";
    second.innerHTML="CRICKET-HARMANPREET KAUR"
    third.innerHTML=" ON INDIA-W'S LOSS"
    para.addEventListener("click",()=>{
    link.href="https://www.republicworld.com/sports/cricket/latest-news-the-fire-that-he-ignited-harbhajan-singh-hails-virat-kohli-captaincy-stint-with-high-praise";
    })
}
else if(img5.style.background=="red"){
    images.src="img5.jfif"; 
    first.innerHTML="INDIA EYE ANOTHER IMPRESSIVE";
    second.innerHTML="OUTING AS T20I SERIES AGAINST"
    third.innerHTML="BANGLADESH COMMENCES"
    para.addEventListener("click",()=>{
    link.href="https://www.thehindu.com/sport/cricket/india-wins-toss-elect-to-bowl-in-first-t20i-vs-bangladesh/article68725117.ece";
    })
}
})
}
