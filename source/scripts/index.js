/* в этот файл добавляет скрипты*/
window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.header__navigation').classList.remove('header__navigation--none-js');
});

document.querySelector('.toggle__button').addEventListener('click', () => {
  const btn = document.querySelector('.toggle__button');
  const menu = document.getElementById('toggle-menu');
  btn.classList.toggle('toggle--open');
  menu.classList.toggle('navigation-list--closed');
});
