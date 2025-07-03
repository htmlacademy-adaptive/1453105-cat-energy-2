/* в этот файл добавляет скрипты*/
window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.header__navigation--js').classList.remove('header--hidden')
});

document.getElementById('toggle-button').addEventListener('click', () => {
  const btn = document.getElementById('toggle-button');
  const menu = document.getElementById('toggle-menu');
  btn.classList.toggle('toggle--open');
  menu.classList.toggle('navigation-list--closed');
});
