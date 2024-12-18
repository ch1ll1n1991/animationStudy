// script.js

document.querySelector('.hamburger').addEventListener('click', () => {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('active');
  const hamburger = document.querySelector('.hambuger');
  hamburger.forEach((item) => item.classList.toggle("is-active"));
});
