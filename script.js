'use strict';

let numb = Math.floor(Math.random() * 20) + 1;

console.log(numb);

let highscore = 20;

document.querySelector('.highscore').textContent =
  localStorage.getItem('highscore');

function checkNumb() {
  //Proverava da li je korisnik uneo broj
  if (document.querySelector('.guess').value) {
    //Pogodio je
    if (document.querySelector('.guess').value == numb) {
      document.querySelector('.message').textContent = 'Correct answer'; //Ispisi da je tacno
      document.querySelector('.check').disabled = true; //Onesposobi klik
      document.querySelector('.number').textContent = numb; // Upitnik postaje broj
      document.querySelector('header').style.backgroundColor = '#60b347'; //Header menja boju
      document.querySelector('main').style.backgroundColor = '#60b347'; //Main menja boju
      //Ako je highscore veci od local storage-a, update-uj highscore
      if (highscore > localStorage.getItem('highscore')) {
        localStorage.setItem('highscore', highscore);
      }
      //Ispisi highscore
      document.querySelector('.highscore').textContent =
        localStorage.getItem('highscore');
    }
    //nije pogodio
    else {
      document.querySelector('.score').textContent--; //Umanji score
      highscore--; //Umanji highscore

      if (document.querySelector('.guess').value < numb) {
        document.querySelector('.message').textContent = 'Too low';
      } else document.querySelector('.message').textContent = 'Too high';
    }
  }
  //Ispisi highscore
  document.querySelector('.highscore').textContent =
    localStorage.getItem('highscore');
}
//Postavi local storage highscore na 0
function reset() {
  localStorage.setItem('highscore', 0);
  document.querySelector('.highscore').textContent =
    localStorage.getItem('highscore');
}
