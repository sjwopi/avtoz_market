const hambBtn = document.querySelector('.header__hambbtn');
const hambContainer = document.querySelector('.header__mobile-container');
hambBtn.addEventListener('click', () => {
  hambBtn.classList.toggle('open')
  hambContainer.classList.toggle('open')
  document.body.classList.toggle('open')
})

const aboutMore = document.querySelector('.aboutPage__morebtn');
const aboutText = document.querySelector('.aboutPage__container_sub')
aboutMore.addEventListener('click', () => {
  aboutText.classList.toggle('open')
  if(aboutText.classList.contains('open')) {
    aboutMore.textContent = "Скрыть"
  } else {
    aboutMore.textContent = "Читать далее"
  }
})