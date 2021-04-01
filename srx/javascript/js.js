/* TOC tac toc */

const X_CLASS = 'x'
const cercle_CLASS = 'cercle'
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
const celluleElements = document.querySelectorAll('[data-cellule]')
const planche = document.getElementById('planche')
const messagegagnantElement = document.getElementById('messagegagnant')
const Buttonrecommencer = document.getElementById('Buttonrecommencer')
const messagegagnantTextElement = document.querySelector('[data-winning-message-text]')
let cercleTurn

lancerpartie()

Buttonrecommencer.addEventListener('click', lancerpartie)

function lancerpartie() {
  cercleTurn = false
  celluleElements.forEach(cellule => {
    cellule.classList.remove(X_CLASS)
    cellule.classList.remove(cercle_CLASS)
    cellule.removeEventListener('click', signecliquer)
    cellule.addEventListener('click', signecliquer, { once: true })
  })
  classedesurvoltableau()
  messagegagnantElement.classList.remove('montrer')
}

function signecliquer(e) {
  const cellule = e.target
  const currentClass = cercleTurn ? cercle_CLASS : X_CLASS
  positionmarker(cellule, currentClass)
  if (verifiergagnant(currentClass)) {
    fingame(false)
  } else if (estdessiner()) {
    fingame(true)
  } else {
    echangetour()
    classedesurvoltableau()
  }
}

function fingame(Dessiner) {
  if (Dessiner) {
    alert('Dessiner!') ;
  } else {
    alert(`${cercleTurn ? "O" : "X"} Gagne!`) ;
  }
}

function estdessiner() {
  return [...celluleElements].every(cellule => {
    return cellule.classList.contains(X_CLASS) || cellule.classList.contains(cercle_CLASS)
  })
}

function positionmarker(cellule, currentClass) {
  cellule.classList.add(currentClass)
}

function echangetour() {
  cercleTurn = !cercleTurn
}

function classedesurvoltableau() {
  board.classList.remove(X_CLASS)
  board.classList.remove(cercle_CLASS)
  if (cercleTurn) {
    board.classList.add(cercle_CLASS)
  } else {
    board.classList.add(X_CLASS)
  }
}

function verifiergagnant(currentClass) {
  return WINNING_COMBINATIONS.some(combination => {
    return combination.every(index => {
      return celluleElements[index].classList.contains(currentClass)
    })
  })
}


/* Calculatrice */
function tocuhenum(num){
    document.ecran.ecrancalculatrcice.value= document.ecran.ecrancalculatrcice.value+num;
}

function resulat(){
    var res = document.ecran.ecrancalculatrcice.value;
    if(res){
        document.ecran.ecrancalculatrcice.value = eval(res);
    }
}

function effacer(){
    document.ecran.ecrancalculatrcice.value = "";
}

function retour(){
    var tmp = document.ecran.ecrancalculatrcice.value;
    document.ecran.ecrancalculatrcice.value = tmp.substring(0,tmp.length-1);
}