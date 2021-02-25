const myName = prompt("Enter Your Name:"); 
const mySubject = prompt("Enter Your Subject Name:");
const namemy = prompt("Enter Your University Name:");



if (namemy != null && myName != null && mySubject != null) {
    document.querySelector("h1").innerHTML= "Hi " + myName +". You Love " + mySubject + " "+ Math.floor(Math.random()*100) + "% . But You Love " + namemy +" " + Math.round(Math.random()*100) + "%. " + " You have a bad or good news. You need more then  " + Math.round((Math.random()*10)/2) + " years to complate your study.";
    
    document.querySelector("h2").innerHTML="Thank You " + myName +".";
}