/* *************************************************** */ /* PARTIE 1 ==> DECLARATION DES VARIABLES DU PROGRAMME */ /* *************************************************** */ let scoresGlobals = [0, 0];
let scoreEnCours = 0;
score1= document.getElementById(`score-1`) ;
score2=document.getElementById(`score-2`);
encours1= document.getElementById(`encours-1`);
encours2= document.getElementById(`encours-2`);
const joueur1 = document.querySelector('.joueur1');
const joueur2 = document.querySelector('.joueur2');
let lancer = document.querySelector(`.btn-lancer`);
let nouveauJeu = document.querySelector('.btn-nouveau');


/* ***************************************** */ /* PARTIE 2 ==> INITIALISATION DU GUI DU JEU */ /* ***************************************** */
nouveauJeu.addEventListener("click", () => {
    document.querySelector(`.de`).style.display = 'none';
    document.querySelector(`.btn-selection`).style.display = 'none'
    score1.textContent=0;
    score2.textContent=0;
    encours1.textContent=0;
    encours2.textContent=0;
    scoreEnCours = 0;
});

/* ********************************************************** */ /* PARTIE 3 ==> GESTION DU CLICK SUR LE BOUTON 'LANCEZ LE DE' */ /* ********************************************************** */



lancer.addEventListener("click", () => {    
    
        if(joueur1.classList.contains('active')){
            
            let de = Math.floor(Math.random() * 6) + 1;
            let domDe = document.querySelector(".de");
            domDe.style.display = "block";
            domDe.src = `resources/images/de-${de}.png`;
            scoreEnCours += de;
            encours1.textContent = scoreEnCours;
           
        }
        if(joueur2.classList.contains('active')){
            scoreEnCours = 0;
            let de = Math.floor(Math.random() * 6) + 1;
            let domDe = document.querySelector(".de");
            domDe.style.display = "block";
            domDe.src = `resources/images/de-${de}.png`;
            scoreEnCours += de;
            encours2.textContent  = scoreEnCours;
            
        }
        else{document.querySelector(`.btn-selection`).style.display = 'block';}   
    
    });

//************* Joueur actif ********************* */

joueur1.addEventListener('click', () => {
    joueur1.classList.toggle('active')
    if (joueur2.classList.contains('active')) {
        joueur2.classList.remove('active');        
    }
    document.querySelector(`.btn-selection`).style.display = 'none';
})
joueur2.addEventListener('click', () => {
    joueur2.classList.toggle('active')
    if (joueur1.classList.contains('active')) {
        joueur1.classList.remove('active');       
    } 
    document.querySelector(`.btn-selection`).style.display = 'none';
})
