// Nav Ham
const ham = document.querySelector('#ham');
const nav = document.querySelector('#nav-menu');

ham.addEventListener('click', function() {
  ham.classList.toggle('ham-active');
  nav.classList.toggle('hidden');
});

// Fixed NavBar
window.onscroll = function() {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;
  const top = document.querySelector('#top');
};