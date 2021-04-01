/* Ecrire dans la Console */

console.log("Voila comment afficher dan sla console!");
var varaible = "Afficher du texte a partir d'une variable";
console.log(varaible);
var va1 = "Adan";
var va2 = "EVE";
console.log("Concaténation" + " " + va1+ " "+ va2 + " " + "Opération de calcul : de 5 + 2 = "+ (5+2));


/*DOM + Parcourir des éléments */

/* Afficher le nombre de disque Or , Platine, Diament */
window.addEventListener("DOMContentLoaded", afficher);

function afficher(){
    console.log("Fonction disque Or , Platine, Diament");
    
    var Diament = document.querySelectorAll(".Diament");
    console.log("Nombre de Diament : "+Diament.length)
    
    var Platine = document.querySelectorAll(".Platine");
    console.log("Nombre de Platine : "+Platine.length)

    var Or = document.querySelectorAll(".Or");
    console.log("Nombre de Or : "+Or.length)

    var certification = document.querySelectorAll(".certification");
    var nombre = certification.length+1;
    console.log("Nombre certification : "+nombre)

}

/*Changement de couleur de fond mode dark */

var dark = (localStorage.getItem("dark")=='true');
window.addEventListener("DOMContentLoaded", fond);  

function fond(){
    dark=!dark;  
    if(dark){
        document.querySelector("body").style.backgroundColor="black";
        document.querySelector("body").style.color="white";
    }
    else{
        document.querySelector("body").style.backgroundColor="white";
        document.querySelector("body").style.color="black";
    }
    localStorage.setItem("dark", !dark); 
}

function chargement(e) {
    e.target.parentNode.classList.toggle('active');
    setTimeout(function(){
      document.getElementsByClassName('changement')[0].classList.remove('active');
      fond();
    },6500);
  }

/* Afficher des Tooltip sur les images */
var root = document.documentElement;
window.addEventListener("DOMContentLoaded", initTooltip);
var mesTooltips;
function initTooltip()
{
    mesTooltips = document.querySelectorAll("*[data-tooltip]");
    for(i=0;i<mesTooltips.length;i++){
        let tooltip = document.createElement("div");
        root.appendChild(tooltip);
        
        tooltip.style.display = "none";
        tooltip.innerHTML = mesTooltips[i].getAttribute("data-tooltip");
        
        mesTooltips[i].addEventListener("mouseenter", function(e){
            tooltip.style.display="block";
        });
        mesTooltips[i].addEventListener("mouseleave", function(e){
            tooltip.style.display="none"; 
        });
        mesTooltips[i].addEventListener("mousemove", function(e){
            tooltip.style.position="fixed";
            tooltip.style.left=(e.pageX+10)+"px";
            tooltip.style.top=(e.pageY+10)+"px"; 
        });
    }
}


/* Bouton pour remonter en haut */
$(function(){
    $("#haut").click(function(){
        $("html, body").animate({scrollTop: 0},"slow");
    });
});

/* Animation accordeon */

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
        panel.style.display = "none";
        } else {
        panel.style.display = "block";
        }
    });
};
