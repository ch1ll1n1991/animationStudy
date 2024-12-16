// script.js

document.querySelector('.hamburger').addEventListener('click', () => {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('active');
});
