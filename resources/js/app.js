/* *************************************************** */ /* PARTIE 1 ==> DECLARATION DES VARIABLES DU PROGRAMME */ /* *************************************************** */ let scoresGlobals =[0, 0];
let scoreEnCours = 0;
let joueurActif = 1;

/* ***************************************** */ /* PARTIE 2 ==> INITIALISATION DU GUI DU JEU */ /* ***************************************** */ 
document.getElementById(`score-1`).textContent = '0'; 
document.getElementById(`score-2`).textContent = '0'; 
document.getElementById(`encours-1`).textContent = '0'; 
document.getElementById(`encours-2`).textContent = '0'; 
document.querySelector(`.de`).style.display = 'none';

/* ********************************************************** */ /* PARTIE 3 ==> GESTION DU CLICK SUR LE BOUTON 'LANCEZ LE DE' */ /* ********************************************************** */

let lancer = document.querySelector(`.btn-lancer`);

lancer.addEventListener("click", () => {
let de = Math.floor(Math.random() * 6) + 1;

let domDe = document.querySelector(".de");
domDe.style.display = "block";
domDe.src = `resources/images/de-${de}.png`;
scoreEnCours += de;
document.getElementById(`encours-${joueurActif}`).textContent = scoreEnCours;

});
// ***********nouveau jeu ********************************
let nouveauJeu = document.querySelector('.btn-nouveau');
nouveauJeu.addEventListener("click", () =>{
    document.getElementById(`score-1`).textContent = '0'; 
    document.getElementById(`score-2`).textContent = '0'; 
    document.getElementById(`encours-1`).textContent = '0'; 
    document.getElementById(`encours-2`).textContent = '0'; 
    document.querySelector(`.de`).style.display = 'none';
    scoreEnCours = 0;
});


//************* Joueur actif ********************* */
const joueur1 = document.querySelector('.joueur_panel_1');
const joueur2 = document.querySelector('.joueur_panel_2');
joueur1.addEventListener('click', ()=>{
    joueur1.classList.toggle('active')
    if(joueur2.classList.contains('active')){
        joueur2.classList.remove('active');
    }    
})
joueur2.addEventListener('click', ()=>{
    joueur2.classList.toggle('active')
    if(joueur1.classList.contains('active')){
        joueur1.classList.remove('active') ;
    }R    
})
