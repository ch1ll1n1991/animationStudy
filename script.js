// script.js

document.querySelector('.hamburger').addEventListener('click', () => {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('active');
  const hamburger = document.querySelector('.hambuger');
  if (hamburger.classList.contains("is-active")){
    hamburger.classList.remove("is-active");
  } else {
    hamburger.classList.add("is-active");
  }
});
