'use strict';
const modals = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

const contenRemover = function () {
  modals.classList.add('hidden');
  overlay.classList.add('hidden');
};
const contentShow = function () {
  modals.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', contentShow);
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modals.classList.contains('hidden'))
    contenRemover();
});

btnCloseModal.addEventListener('click', contenRemover);
overlay.addEventListener('click', contenRemover);
