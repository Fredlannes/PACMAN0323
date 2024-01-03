const gameDiv = document.getElementById("game");
const sizeCaseWidth = 28
const scoreHtml = document.getElementById("score")
let score = 0
//creer le plateau (dynamique) -> ok
//creer notre pacman
//gerer les deplacements (sans contraintes)
//contraintes dde déplacement ( pas dans les murs)
//Pièces à manger
// Gerer les fantomes
//...

const layout = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
]

// 0 - pac-dots
// 1 - wall
// 2 - ghost-lair
// 3 - power-pellet
// 4 - empty

creerPlateau();

document.addEventListener("keyup", (event) => {
    deplacerPacman(event.key)
});

function creerPlateau(){
    let cptCase = 0;
    scoreHtml.innerHTML = score
    layout.forEach(caseLayout => {
        let casePlateau = document.createElement("div");
        casePlateau.dataset.numerocase =  cptCase;
        switch (caseLayout){
            case 0 :
                casePlateau.classList.add("point");
                break;
            case 1 :
                casePlateau.classList.add("mur");
                break;
            case 2 :
                casePlateau.classList.add("fantom-area");
                break;
            case 3 :
                casePlateau.classList.add("point-puissance");
                break;
            case 4 :
            
                break;
        }
        gameDiv.appendChild(casePlateau);
        cptCase++;
    });

    getCaseByIndex(489).classList.add("pacman");
    generateFantom();


    //deplacement fantome aleatoire
    setInterval(deplacerFantome, 1000)
}

function getCaseByIndex(index){
    let caseGame =  document.querySelector("[data-numerocase='"+index+"']");
    return caseGame;
}

function deplacerPacman (direction){
    let pacmanDiv = document.querySelector(".pacman")
    let pacmanCase = pacmanDiv.dataset.numerocase
    let caseDestination = null
    switch(direction){
        case "ArrowUp": 
        //deplacer la case contenant pacman de 1 vers le haut
        //caseDestination = getCaseByIndex(parseInt(pacmanCase) - sizeCaseWidth)
        caseDestination = getNumeroCaseDestination(pacmanCase, directions.Haut)
        break;
        case "ArrowRight": 
        //deplacer la case contenant pacman de 1 vers la droite
        //caseDestination = getCaseByIndex(parseInt(pacmanCase) +1)
        caseDestination = getNumeroCaseDestination(pacmanCase, directions.Droite)
        
        break;
        case "ArrowLeft": 
        //deplacer la case contenant pacman de 1 vers la gauche
        //caseDestination = getCaseByIndex(parseInt(pacmanCase) -1)
        caseDestination = getNumeroCaseDestination(pacmanCase, directions.Gauche)
        
        break;
        case "ArrowDown": 
        //deplacer la case contenant pacman de 1 vers le bas
        //caseDestination = getCaseByIndex(parseInt(pacmanCase) + sizeCaseWidth)
        caseDestination = getNumeroCaseDestination(pacmanCase, directions.Bas)
        
        default :
        break;
    };

    if(caseDestination != null){
        if(checkDirectionMur(caseDestination)){
            pacmanDiv.classList.remove("pacman");
            caseDestination.classList.add("pacman");
            checkPointEating(caseDestination)
        }
    }
}

//return faux si je peux pas aller la où je veux
//return vrai si je peux
function checkDirectionMur(caseDestination){
    if(caseDestination.classList.contains("mur")){
        return false
    }
    else {
        
        return true
    }
}

//return true si on est en collision avec un fantome
function CheckFantomeCollision(caseDestination)
{
    if(caseDestination.classList.contains("fantom")){
        return true;
    }
    else{
        
        return false;
    }
}


function checkPointEating(caseDestination){
    if(caseDestination.classList.contains("point")){
        incrementScore()
        caseDestination.classList.remove("point")
    }
}

function incrementScore(){
    score++
    scoreHtml.innerHTML = score;
    let allPoint = layout.filter(l => l == 0)
    if(score == allPoint.length){
        alert("C'est gagné")
    }
}

function generateFantom(){
    for(let i=0; i<4; i++){
        //je recupere les cases qui peuvent supporter la generation d'un fantome
        //elles ont la classe fantom-area et n'ont pas la classe fantom
        let casePotentialForFantom = document.querySelectorAll(".fantom-area:not(.fantom)")
    
        //parmis les case dispo j'en prends une au hasard
        let caseForFantom = casePotentialForFantom[getRandomNumber(casePotentialForFantom.length)];

        //j'ajoute la classe fantom à mon fantome
        caseForFantom.classList.add("fantom")
    }
}

function getRandomNumber(max) {
    return Math.floor(Math.random()*max)
}

function deplacerFantome(){
    let allFantom = document.querySelectorAll(".fantom");
    allFantom.forEach(fantome => {
        let goodDirectionFinded = false;

        while(!goodDirectionFinded){
            let direction = getRandomNumber(4);
            let fantomCase = fantome.dataset.numerocase;
            //console.log(direction)
            switch(direction){
                case 0 : //haut
                caseDestination = getNumeroCaseDestination(fantomCase, directions.Haut)
                    break;
                case 1 : //bas
                caseDestination = getNumeroCaseDestination(fantomCase, directions.Bas)
                    break;
                case 2 : //gauche
                caseDestination = getNumeroCaseDestination(fantomCase, directions.Gauche)
                    break;
                case 3 : //droite
                caseDestination = getNumeroCaseDestination(fantomCase, directions.Droite)
                    break;
            }
            //verifier si je peux aller ds cette direction (pas un mur)
            if(checkDirectionMur(caseDestination) && !CheckFantomeCollision(caseDestination)){
                fantome.classList.remove("fantom");
                caseDestination.classList.add("fantom");
                goodDirectionFinded = true;
            }
        }
    });
}

function getNumeroCaseDestination(caseActuelle, direction){
    let caseDestination = null
    switch(direction){
        case directions.Haut : 
        //deplacer la case contenant pacman de 1 vers le haut
        caseDestination = getCaseByIndex(parseInt(caseActuelle) - sizeCaseWidth)
        break;
        case directions.Droite: 
        //deplacer la case contenant pacman de 1 vers la droite
        caseDestination = getCaseByIndex(parseInt(caseActuelle) +1)
        break;
        case directions.Gauche: 
        //deplacer la case contenant pacman de 1 vers la gauche
        caseDestination = getCaseByIndex(parseInt(caseActuelle) -1)
        break;
        case directions.Bas: 
        //deplacer la case contenant pacman de 1 vers le bas
        caseDestination = getCaseByIndex(parseInt(caseActuelle) + sizeCaseWidth)
        default :
        break;
    };
    return caseDestination;
}

const directions = {
    Haut : 1,
    Bas : 2,
    Droite : 3,
    Gauche : 4
}