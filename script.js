'use strict'; //opravuje syntax

//uložit do proměnných (třídy), se kterými budeme pracovat

const modal = document.querySelector('.modal'); //modal = pop-up
const overlay = document.querySelector('.overlay');
const buttonCloseModal = document.querySelector('.close-modal'); //querySelector označí pouze jednu třídu
const buttonOpenModal = document.querySelectorAll('.show-modal'); //all = označení všech tříd; např. u 2 tlačítek se stejnou URL

//
console.log(buttonOpenModal);

//handle na klik
for (let i = 0; i < buttonOpenModal.length; i++) {
  console.log(buttonOpenModal[i].textContent);
  buttonOpenModal[i].addEventListener('click', function () {
    //console.log('Button Click')
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  })
}

const closeModal = function () {
  modal.classList.add('hidden'); //odstraní vyskakovací tabulku 
  overlay.classList.add('hidden'); //vrátí zpět nerozmazané pozadí
}

//ESC
buttonCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) { //pokud NEobsahuje třídu HIDDEN, tak se to zavolá a přidá se třída HIDDEN
    closeModal();
  }
}
)