function modifierText(texte)//dans le paramètre texte, tu mettre la chaine de caractère à afficher
{
    document.getElementById("text").innerHTML = texte; // "text" étant l'id te ta balise qui contient le texte.
}
 
function tester(choix)// une fonction que l'on appellera pour tester le formulaire
{
 if (choix[1].checked)
 { 
    modifierText("Bonne réponse: Fabien Barthez était le gardien de but de l'équipe de France de football");
     
 }else if (choix[0].checked || choix[2].checked )
 {
        modifierText("Mauvaise réponse: Fabien Barthez était le gardien de but de l'équipe de France de football");
     
 }else {
    alert("Le QCM est mal rempli");
 };
 return false;
}