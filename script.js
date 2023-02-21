'use strict';
const modals = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

const contentShow = function () {
  modals.classList.add('hidden');
  overlay.classList.add('hidden');
};
const contenRemover = function () {
  modals.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', contenRemover);
}
document.addEventListener('keydown', function (e) {
  alert(`The key ${e.key} was presed!! `);
});

btnCloseModal.addEventListener('click', contentShow);
overlay.addEventListener('click', contentShow);
