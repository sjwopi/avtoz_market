const hambBtn = document.querySelector('.header__hambbtn');
const hambContainer = document.querySelector('.header__mobile-container');

hambBtn.addEventListener('click', () => {
  hambBtn.classList.toggle('open')
  hambContainer.classList.toggle('open')
  document.body.classList.toggle('open')
})

