const elModal = document.querySelector('.modal');
const elCloseButton = document.querySelector('.js-close-button');

if (elCloseButton) {
elCloseButton.addEventListener('click', function () {
  elModal.classList.remove('modal-open');
});
}

setTimeout(function () {
  elModal.classList.add('modal-open')
}, 30000);