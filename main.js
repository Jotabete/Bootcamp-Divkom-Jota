const Body = document.querySelector("body")
const Header = document.querySelector("header")
const Footer = document.querySelector("footer")
const h1 = document.querySelector("h1")
const Container = document.getElementsByClassName("container")
const Edu = document.getElementsByClassName("education")
const Exp = document.getElementsByClassName("experience")
const Skl = document.getElementsByClassName("skills")
const contact = document.getElementById("contact")
const buttonDark = document.getElementById("buttondark")
const buttonLight = document.getElementById("buttonlight")


function DarkMode(){
    Body.style.backgroundColor = "Black";
    Header.style.backgroundColor= "Grey";
    Footer.style.backgroundColor= "Grey";
    for (var i = 0; i < Container.length; i++) {
        Container[i].style.backgroundColor="Grey";
    }
    for (var i = 0; i < Edu.length; i++) {
        Edu[i].style.backgroundColor="whitesmoke";
    }
    for (var i = 0; i < Exp.length; i++) {
        Exp[i].style.backgroundColor="whitesmoke";
    }
    for (var i = 0; i < Skl.length; i++) {
        Skl[i].style.backgroundColor="whitesmoke";
    }
    h1.style.color="whitesmoke"
    contact.style.color="whitesmoke"
    buttonDark.style.display ="none";
    buttonLight.style.display ="block";
}

function LightMode(){
    Body.style.backgroundColor = "azure";
    Header.style.backgroundColor= "powderblue";
    Footer.style.backgroundColor= "powderblue";
    for (var i = 0; i < Container.length; i++) {
        Container[i].style.backgroundColor="powderblue";
    }
    for (var i = 0; i < Edu.length; i++) {
        Edu[i].style.backgroundColor="lightcyan";
    }
    for (var i = 0; i < Exp.length; i++) {
        Exp[i].style.backgroundColor="lightcyan";
    }
    for (var i = 0; i < Skl.length; i++) {
        Skl[i].style.backgroundColor="lightcyan";
    }
    h1.style.color="Black"
    contact.style.color="Black"
    buttonDark.style.display ="block";
    buttonLight.style.display ="none";
}