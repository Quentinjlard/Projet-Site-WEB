/*JS*/
var x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  
  var Latitude= position.coords.latitude;
  var Longitude = position.coords.longitude;

  saveLocalisation(Latitude,Longitude);
}

function ajaxOpenSM(Latitude, Longitude){

    maRequete = new XMLHttpRequest();

    maRequete.open('GET','https://nominatim.openstreetmap.org/reverse?format=json&lat='+Latitude+'&lon='+Longitude, true);

    maRequete.onreadystatechange = callB;

    maRequete.send();
}

function callB(){
    if (maRequete.readyState === XMLHttpRequest.DONE) { 
        if (maRequete.status === 200) { 
            console.log(maRequete.responseText); 
        } else { 
            alert(maRequete.status);
        } 
    } 

    var codeP = getCP(maRequete.responseText);

    colorDPT(codeP);
}

function saveLocalisation(Latitude,Longitude){

    ajaxOpenSM(Latitude, Longitude);
}

function getCP(response){
    
    const json = response;
    const obj = JSON.parse(json);

    const adresse = obj.address.postcode;

    CP = adresse.substr(0, 2);

    return CP;
}

function colorDPT(codeP){
  
  document.querySelector("path[data-num='"+codeP+"']").style.fill = 'red';

  }   