const women=document.getElementById("women")
const men=document.getElementById("men")
const menclass1=document.getElementById("men1")
const menclass2=document.getElementById("men2")
const menclass3=document.getElementById("men3")
const menclass4=document.getElementById("men4")
const menclass5=document.getElementById("men5")
const menclass6=document.getElementById("men6")
const menclass7=document.getElementById("men7")
const menclass8=document.getElementById("men8")
const menclass9=document.getElementById("men9")
const menclass10=document.getElementById("men10")
const menclass11=document.getElementById("men11")
const womenclass1=document.getElementById("women1")
const womenclass2=document.getElementById("women2")
const womenclass3=document.getElementById("women3")
const womenclass4=document.getElementById("women4")
const womenclass5=document.getElementById("women5")
const womenclass6=document.getElementById("women6")
const womenclass7=document.getElementById("women7")
const womenclass8=document.getElementById("women8")
const womenclass9=document.getElementById("women9")
const womenclass10=document.getElementById("women10")
const womenclass11=document.getElementById("women11")
const menclass=[menclass1,menclass2,menclass3,menclass4,menclass5,menclass6,menclass7,menclass8,menclass9,menclass10,menclass11]
const womenclass=[womenclass1,womenclass2,womenclass3,womenclass4,womenclass5,womenclass6,womenclass7,womenclass8,womenclass9,womenclass10,womenclass11]
women.addEventListener("click",()=>{
    women.style.color="red";
    men.style.color="grey"
    women.style.textDecoration="underline"
    men.style.textDecoration="none"
    for(let i=0;i<11;i++){
    menclass[i].style.display="none"
    }
    for(let i=0;i<11;i++){
    womenclass[i].style.display="flex"}
})
men.addEventListener("click",()=>{
    men.style.color="red";
    women.style.color="grey"
    men.style.textDecoration="underline"
    women.style.textDecoration="none"
    for(let i=0;i<11;i++){
        menclass[i].style.display="flex"
        }
        for(let i=0;i<11;i++){
        womenclass[i].style.display="none"
        }
})
const span=document.querySelector("span")
const clear=()=>{
    for(let i=0;i<11;i++){
        menclass[i].style.display="none"
        }
        for(let i=0;i<11;i++){
        womenclass[i].style.display="none"
        }
        men.style.display="none"
        women.style.display="none"
}
const displaymen=()=>{
    for(let i=0;i<11;i++){
        menclass[i].style.display="flex"
        }
        for(let i=0;i<11;i++){
        womenclass[i].style.display="none"
        }
        men.style.display="flex"
        women.style.display="flex"
}
const displaywomen=()=>{
    for(let i=0;i<11;i++){
        menclass[i].style.display="none"
        }
        for(let i=0;i<11;i++){
        womenclass[i].style.display="flex"
        }
        men.style.display="flex"
        women.style.display="flex"
}
const display=()=>{
    span.addEventListener("click",()=>{
        content.style.display="none"
        displaymen();
    })
}
const display1=()=>{
    span.addEventListener("click",()=>{
        content.style.display="none"
        displaywomen();
    })
}
const photo=document.querySelector("#photo img")
const h1=document.querySelector(".about h1")
const one=document.querySelector("#about .one")
const two=document.querySelector("#about .two")
const three=document.querySelector("#about .three")
const four=document.querySelector("#about .four")
const h2=document.querySelector(".about h2")
const aboutclassp=document.querySelector(".about p")
const content=document.getElementById("content")
menclass1.addEventListener("click",()=>{
clear();
content.style.display="flex"
photo.src="faf.png"
one.innerHTML="13 JUL 1984";
two.innerHTML="Player";
three.innerHTML="Right Handed";
four.innerHTML="Spin";
h1.innerHTML="FAF DU PLESSIS";
h2.innerHTML="BATSMAN";
aboutclassp.innerHTML="A leading moniker of the shortest format of the sport and a man whose hands are safer than your houses, Faf du Plessis will be joining the ranks of Challengers for the first time. An experienced right-handed batter who can ace any bowler in the world, display exemplary strokeplay and control will be leading the batting-order of the Challengers in their new quest. The South African opener played a crucial role in Chennai’s title-campaign in 2021. His addition to the side at a price of Rs 7 crore will be a massive boost to a side whose title quest will be renewed with new verve and vigour."
display();
})
menclass2.addEventListener("click",()=>{
clear();
content.style.display="flex"
photo.src="vk (1)_0_24_11zon.png"
one.innerHTML="05 NOV 1988";
two.innerHTML="Player";
three.innerHTML="Right Handed";
four.innerHTML="Medium Speed";
h1.innerHTML="VIRAT KOHLI";
h2.innerHTML="BATSMAN";
aboutclassp.innerHTML="Virat Kohli needs no introduction. Former India captain relinquished his role as captain for the Royal Challengers Bangalore after having led the franchise for 9 years. He made his IPL debut in the first-ever match of the IPL on April 18th, 2008 against Kolkata Knight Riders at RCB’s home ground, M.Chinnaswamy Stadium. Virat Kohli is the leading run-scorer in the IPL and holds the record for the most number of centuries (4) in an IPL season."
display();
})
menclass3.addEventListener("click",()=>{
clear();
content.style.display="flex"
photo.src="siraj_0.png";
one.innerHTML="13 mar 1994";
two.innerHTML="Player";
three.innerHTML="Right Handed";
four.innerHTML="fAST";
h1.innerHTML="MOHAMMED SIRAJ ";
h2.innerHTML="BOWLER";
aboutclassp.innerHTML="Mohammed Siraj is one of the premier fast bowlers of the Hyderabad side on the domestic circuit. He was bought by RCB in the 2018 season of the IPL for a sum of INR 2.6 Crores. Given his potential, he can well be a great bowler in all three formats of the game for the Indian side in the years to come."
display();
})
menclass4.addEventListener("click",()=>{
clear();
content.style.display="flex"
photo.src="topley_0.png";
one.innerHTML="21 feb 1994";
two.innerHTML="Player";
three.innerHTML="Right Handed";
four.innerHTML="fAST";
h1.innerHTML="Reece Topley";
h2.innerHTML="BOWLER";
aboutclassp.innerHTML="Known for his fearsome yorker and his finesse of angling the ball both ways from the batter, the English fast bowler is a beast in the making. Towering at 6’7, the lanky southpaw started his county career with two fifers in three games while the aura amplified in the 2012 U19 World Cup with Topley claiming 19 wickets for himself. Barring the unfortunate injuries, Topley has established himself as a mainstay in the current English pace unit, and with 168 T20 wickets in his tally, he comes forth as an obvious menace to the pace unit of RCB."
display();
})
menclass5.addEventListener("click",()=>{
clear();
content.style.display="flex"
photo.src="anuj.png";
one.innerHTML="17 oct 1999";
two.innerHTML="Player";
three.innerHTML="left Handed";
four.innerHTML="-";
h1.innerHTML="Anuj Rajawat";
h2.innerHTML="Wicket Keeper";
aboutclassp.innerHTML="If you were expecting a pompous introduction, maybe you wouldn’t be getting it when it comes to Anuj Rawat. But the knock that set himself apart from the others was the debut innings of 71 against Assam. Being incipient in the wee days of his cricketing career, he already has a first-class batting average of 40. Even though he is still to gain traction, yet he has already shown glimpses of promise in his domestic days. Royal Challengers Bangalore swooped him in for Rs 3.40 crore to bolster their wicket-keeping ranks with some solid striking flair."
display();
})
menclass6.addEventListener("click",()=>{
clear();
content.style.display="flex"
photo.src="suyash.png";
one.innerHTML="06 dec 1997";
two.innerHTML="Player";
three.innerHTML="Right Handed";
four.innerHTML="Medium speed";
h1.innerHTML="Suyash Prabhudessai";
h2.innerHTML="BATSMAN";
aboutclassp.innerHTML="As the demands for a middle-order batter kept on growing, the Challengers needed a response. What would have been better anyway than a bloke who was already a part of the family in the precursor edition? A batting all-rounder who houses a decent flair for some explosive middle-order batting and can also chip in with a couple of crucial overs, Suyash Prabhudessai was roped in for a sum of Rs 30 lakh. Welcome back to the family, Suyash."
display();
})
menclass7.addEventListener("click",()=>{
clear();
content.style.display="flex"
photo.src="jacks_0.png";
one.innerHTML="21 nov 1998";
two.innerHTML="Player";
three.innerHTML="Right Handed";
four.innerHTML="spin";
h1.innerHTML="Will Jacks";
h2.innerHTML="All-Rounder";
aboutclassp.innerHTML="The hard-hitting phenomenon who grabbed a lot of eyeballs with a swashbuckling century from just 25 balls in a T10 game is deemed a valuable all-rounder who makes T20 his forte. Known for his clean and ginormous strikes, Jacks was a part of Surrey’s youth brigade that propelled the county contingent to a swashbuckling championship in 2018. With a T20 strike rate of 114 and an average of 29.10, Jacks can be an absolute revelation in the echelons of RCB."
display();
})
menclass8.addEventListener("click",()=>{
clear();
content.style.display="flex"
photo.src="vijay_1.png";
one.innerHTML="31 jan 1997";
two.innerHTML="Player";
three.innerHTML="Right Handed";
four.innerHTML="meduim speed";
h1.innerHTML=" Vyshak Vijaykumar";
h2.innerHTML="BOWLER";
aboutclassp.innerHTML="Karnataka pacer Vyshak Vijaykumar comes in as a replacement for Rajat Patidar in RCB's squad for IPL 2023."
display();
})
menclass9.addEventListener("click",()=>{
clear();
content.style.display="flex"
photo.src="manoj.png";
one.innerHTML="05 oct 1998";
two.innerHTML="Player";
three.innerHTML="Left Handed";
four.innerHTML="Meduim speed";
h1.innerHTML="Manoj Bhandage";
h2.innerHTML="All-Rounder";
aboutclassp.innerHTML="A home-grown talent bursting forth to life, right in the heart of Karnataka, Manoj Bhandage can smash the ball a fair mile and also chime in with a handful of crucial overs in the middle. He is known for his tempestuous batting and his flair for swinging his arms freely under the pump against notable monikers of the game."
display();
})
menclass10.addEventListener("click",()=>{
clear();
content.style.display="flex"
photo.src="rajat.png";
one.innerHTML="01 jan 1993";
two.innerHTML="Player";
three.innerHTML="Right Handed";
four.innerHTML="-";
h1.innerHTML="Rajat Patidar";
h2.innerHTML="Batsman";
aboutclassp.innerHTML="Rajat Patidar made his comeback to the RCB side in the 2022 season as a replacement for injured wicketkeeper-batter Luvnith Sisodia. Hailing from Madhya Pradesh, Patidar was the highest run-scorer for his state team in the 2018-19 Ranji Trophy season. With a strike rate of more than 140 in the Indian T20 domestic circuit, he is a handy bat at the top of the order."
display();
})
menclass11.addEventListener("click",()=>{
clear();
content.style.display="flex"
photo.src="mayank_0.png";
one.innerHTML="11 nov 1996";
two.innerHTML="Player";
three.innerHTML="Right Handed";
four.innerHTML="-";
h1.innerHTML="Mayank Dagar";
h2.innerHTML="All-rounder";
aboutclassp.innerHTML="Mayank Dagar, a left-arm spin-bowling all-rounder from Delhi has 55 T20 wickets at an average of 23.03 at an economy rate of just 6.57."
display();
})
womenclass1.addEventListener("click",()=>{
clear();
content.style.display="flex"
photo.src="mandhana.png";
one.innerHTML="18 JUL 1996";
two.innerHTML="Captain";
three.innerHTML="Left Handed";
four.innerHTML="Right arm off break";
h1.innerHTML="Smriti mandhana";
h2.innerHTML="Batsman";
aboutclassp.innerHTML="Join us in welcoming the first  Royal Challenger, Smriti Mandhana! 😍Welcome to RCB 🔥#PlayBold #WeAreChallengers #WPL2023 #WPLAuction"
display1();
})
womenclass2.addEventListener("click",()=>{
clear();
content.style.display="flex"
photo.src="sophie.png";
one.innerHTML="1 SEP 1989";
two.innerHTML="player";
three.innerHTML="Right Handed";
four.innerHTML="medium";
h1.innerHTML="sophie Devine";
h2.innerHTML="All-rounder";
aboutclassp.innerHTML="The all-rounder from New Zealand! Sophie Devine is now a Royal Challenger! 😍#PlayBold #WeAreChallengers #WPL2023 #WPLAuction #NowARoyalChallenger"
display1();
})
womenclass3.addEventListener("click",()=>{
clear();
content.style.display="flex"
photo.src="perry.png";
one.innerHTML="03 NOV 1990";
two.innerHTML="Player";
three.innerHTML="Right Handed";
four.innerHTML="Right arm Medium";
h1.innerHTML="Ellyse Perry ";
h2.innerHTML="Batsman";
aboutclassp.innerHTML="Ellyse 'Elite' Perry is now a Royal Challenger! 🔥Welcome to RCB, 🐐!#PlayBold #WeAreChallengers #WPL2023 #WPLAuction #NowARoyalChallenger"
display1();
})
womenclass4.addEventListener("click",()=>{
clear();
content.style.display="flex"
photo.src="renuka.png";
one.innerHTML="1 FEB 1996";
two.innerHTML="Player";
three.innerHTML="Right Handed";
four.innerHTML="Right arm Fast";
h1.innerHTML="Renuka Singh";
h2.innerHTML="Batsman";
aboutclassp.innerHTML="The ICC Emerging Player of 2022 is now a Royal Challenger! 🔥Welcome to RCB, Renuka Singh! 🤩 😍Welcome to RCB 🔥#PlayBold #WeAreChallengers #WPL2023 #WPLAuction"
display1();
})
womenclass5.addEventListener("click",()=>{
clear();
content.style.display="flex"
photo.src="richa.png";
one.innerHTML="23 SEP 2003";
two.innerHTML="Player";
three.innerHTML="Right Handed";
four.innerHTML="-";
h1.innerHTML="Richa Ghosh";
h2.innerHTML="Wicket kepper";
aboutclassp.innerHTML="Attacking ✅Finisher ✅She is a Keeper, literally 😍🔥Welcome to RCB, Richa Ghosh! 🤩 😍Welcome to RCB 🔥#PlayBold #WeAreChallengers #WPL2023 #WPLAuction"
display1();
})
womenclass6.addEventListener("click",()=>{
clear();
content.style.display="flex"
photo.src="danni.png";
one.innerHTML="18 JUL 1996";
two.innerHTML="Player";
three.innerHTML="Left Handed";
four.innerHTML="Right arm off break";
h1.innerHTML="Danni";
h2.innerHTML="Batsman";
aboutclassp.innerHTML="Join us in welcoming the first  Royal Challenger, Danni ! 😍Welcome to RCB 🔥#PlayBold #WeAreChallengers #WPL2023 #WPLAuction"
display1();
})
womenclass7.addEventListener("click",()=>{
clear();
content.style.display="flex"
photo.src="disha.png";
one.innerHTML="19 SEP 1997";
two.innerHTML="Player";
three.innerHTML="Right Handed";
four.innerHTML="Spin";
h1.innerHTML="Disha Kasat";
h2.innerHTML="Bowler";
aboutclassp.innerHTML="Join us in welcoming the first  Royal Challenger, Smriti Mandhana! 😍Welcome to RCB 🔥#PlayBold #WeAreChallengers #WPL2023 #WPLAuction"
display1();
})
womenclass8.addEventListener("click",()=>{
clear();
content.style.display="flex"
photo.src="shreyanka.png";
one.innerHTML="31 JUL 2002";
two.innerHTML="Player";
three.innerHTML="Right Handed";
four.innerHTML="Right arm off spin";
h1.innerHTML="Shreyanka Patil";
h2.innerHTML="All-rounder";
aboutclassp.innerHTML="The young all-rounder from Karnataka is now a Royal Challenger! 🔥Welcome to RCB, Shreyanka Patil! 🤩#PlayBold #WeAreChallengers #WPL2023 #WPLAuction #NowARoyalChallenger"
display1();
})
womenclass9.addEventListener("click",()=>{
clear();
content.style.display="flex"
photo.src="indrani.png";
one.innerHTML="05 SEP 1997";
two.innerHTML="Player";
three.innerHTML="Right Handed";
four.innerHTML="-";
h1.innerHTML="Indrani Roy ";
h2.innerHTML="Wicket Kepper";
aboutclassp.innerHTML="Leading run-scorer in the 2020-21 Women’s One Day League, this wicketkeeper-batter is now a Royal Challenger! 🔥Welcome to RCB, Indrani Roy! 🤩#PlayBold #WeAreChallengers #WPL2023 #WPLAuction #NowARoyalChallenger"
display1();
})
womenclass10.addEventListener("click",()=>{
clear();
content.style.display="flex"
photo.src="kanika ahuja.png";
one.innerHTML="1 JAN 2003";
two.innerHTML="Player";
three.innerHTML="Left Handed";
four.innerHTML="Right arm off spin";
h1.innerHTML="Kanika Ahuja";
h2.innerHTML="All-rounder";
aboutclassp.innerHTML="The young all-rounder from Punjab is now a Royal Challenger! 🔥Welcome to RCB, Kanika Ahuja! 🤩#PlayBold #WeAreChallengers #WPL2023 #WPLAuction #NowARoyalChallenge"
display1();
})
womenclass11.addEventListener("click",()=>{
clear();
content.style.display="flex"
photo.src="ASHA JOY.png";
one.innerHTML="1 JAN 1991";
two.innerHTML="Player";
three.innerHTML="Left Handed";
four.innerHTML="Right arm off break";
h1.innerHTML="Asha Sobhana";
h2.innerHTML="All-rounder";
aboutclassp.innerHTML="Asha Shobana is now a Royal Challenger! 🔥Welcome to RCB! 🤩#PlayBold #WeAreChallengers #WPL2023 #WPLAuction #NowARoyalChallenger"
display1();
})

