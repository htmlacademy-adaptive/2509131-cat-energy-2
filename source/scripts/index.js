const nav = document.querySelector('.nav');
const Toggle = document.querySelector('.main-header__toggle');
const mainHeader = document.querySelector('.main-header');
const mapWrapper = document.querySelector('.contacts__map-wrapper');

mainHeader.classList.remove('main-header--no-js');
Toggle.classList.remove('main-header__toggle--close');
Toggle.classList.add('main-header__toggle--open');
nav.classList.remove('nav--no-js');
nav.classList.remove('nav--is-opened');
nav.classList.add('nav--is-closed');
mapWrapper.classList.remove('contacts__map-wrapper--no-js');

Toggle.addEventListener('click', () => {
  if (nav.classList.contains('nav--is-closed')) {
    nav.classList.remove('nav--is-closed');
    nav.classList.add('nav--is-opened');
  } else {
    nav.classList.add('nav--is-closed');
    nav.classList.remove('nav--is-opened');
  }
});

Toggle.addEventListener('click', () => {
  if (Toggle.classList.contains('main-header__toggle--close')) {
    Toggle.classList.remove('main-header__toggle--close');
    Toggle.classList.add('main-header__toggle--open');
  } else {
    Toggle.classList.add('main-header__toggle--close');
    Toggle.classList.remove('main-header__toggle--open');
  }
});
