
//***************** Déclaration des variables****************************************************************
let scoreEnCours = 0;
const scoreElements = [document.getElementById('score-1'), document.getElementById('score-2')];
const encoursElements = [document.getElementById('encours-1'), document.getElementById('encours-2')];
const joueurs = [document.querySelector('.joueur1'), document.querySelector('.joueur2')];
const lancer = document.querySelector('.btn-lancer');
const nouveauJeu = document.querySelector('.btn-nouveau');
const de = document.querySelector('.de');
const btnSelection = document.querySelector('.btn-selection');
const btnCommuter = document.querySelector('.btn-commuter');
const nomJoueur = [document.getElementById('nom-1'), document.getElementById('nom-2')];
const rule = document.querySelector('.rule');
const sidebare = document.querySelector('.sidebar');




//***************** Initialisation du GUI du jeu****************************************************************
nouveauJeu.addEventListener('click', () => {
    de.style.display = 'none';
    btnSelection.style.display = 'none';
    joueurs.forEach(joueur=> joueur.classList.remove('active'));
    nomJoueur.forEach((nom,index)=>{
        nom.textContent = 'joueur  ' +`${index+1}`;
        nom.classList.remove('vainqueur');})
    scoreElements.forEach(score => score.textContent = 0);
    encoursElements.forEach(encours => encours.textContent = 0);
    lancer.style.display = 'block';
    sidebare.style.display = 'none';
    btnCommuter.style.display = 'none';
    scoreEnCours = 0;
});

// ***************** Gestion du clic sur le bouton "Lancer le dé "****************************************************************
lancer.addEventListener('click', () => {
    const joueurActif = joueurs.find(joueur => joueur.classList.contains('active'));
    const index = joueurs.indexOf(joueurActif);
    if (joueurActif) {
        const deValeur = Math.floor(Math.random() * 6) + 1;
        de.style.display = 'block';
        de.src = `resources/images/de-${deValeur}.png`;
        if (deValeur !== 1)
            {
            scoreEnCours += deValeur;
            
            encoursElements[index].textContent = scoreEnCours;
            }else{
                joueurs.forEach((joueur) => {
                    joueur.classList.toggle('active');
                });
                encoursElements[index].textContent = 0;
                scoreEnCours = 0;
            }
        if(scoreElements[index].textContent >= 100){
            nomJoueur[index].classList.add('vainqueur');
            nomJoueur[index].textContent = 'bravo !!!!';
            lancer.style.display = 'none';
        }      
        }
    if (!joueurs.some(joueur => joueur.classList.contains('active'))) {
            btnSelection.style.display = 'block';
            
        }
});

//***************** Sélection du joueur actif ****************************************************************
joueurs.forEach((joueur, index) => {
    joueur.addEventListener('click', () => {
        btnCommuter.style.display = 'block';
        joueur.classList.toggle('active');
        if (joueurs[(index + 1) % 2].classList.contains('active')) {
            joueurs[(index + 1) % 2].classList.remove('active');
            
        }
        btnSelection.style.display = 'none';
    });
});


//***************** changer de joueur ****************************************************************
btnCommuter.addEventListener('click', () => {
    const joueurActif = joueurs.find(joueur => joueur.classList.contains('active'));
    const index = joueurs.indexOf(joueurActif);
    joueurs.forEach((joueur) => {
        joueur.classList.toggle('active');
    });
    if(joueurActif){
        let  scroreActuel = parseInt(scoreElements[index].textContent) + scoreEnCours; 
        scoreElements[index].textContent = scroreActuel;
        encoursElements[index].textContent = 0;
        scoreEnCours =0; 
        if(scoreElements[index].textContent>=100){
            nomJoueur[index].classList.add('vainqueur');
            nomJoueur[index].textContent = 'bravo!!!!';
            lancer.style.display = 'none';
        }      

    }
});
// *************Afficher les régles du jeu************************************************************************************************
rule.addEventListener('click',(e)=>{
    e.stopPropagation();
    rule.style.display = 'none';
    sidebare.style.display = 'block';
})

window.addEventListener('click', ()=>{
    rule.style.display = 'block';
    sidebare.style.display = 'none';
    });