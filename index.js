var bouton1= document.getElementById("bouton1");
var bouton2= document.getElementById("bouton2");
var bouton3= document.getElementById("bouton3");
var r25= document.getElementById("r25");
var rb9= document.getElementById("rb9");
var f2004= document.getElementById("f2004");

bouton1.addEventListener("click", (e)=>{
    r25.style.display="block";
    rb9.style.display="none";
    f2004.style.display="none";
});

bouton2.addEventListener("click", (e)=>{
    r25.style.display="none";
    rb9.style.display="block";
    f2004.style.display="none";
});

bouton3.addEventListener("click", (e)=>{
    r25.style.display="none";
    rb9.style.display="none";
    f2004.style.display="block";
});