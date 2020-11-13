$('.fade').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
  }); 

const menu = document.querySelector('#menu-toggle');
const links = document.querySelector('.navbar-menu-burger');
const head = document.querySelector('#header');
function open() {
  menu.classList.toggle('open');
  head.classList.toggle('header');
  links.classList.toggle('navbar-active');
}
menu.addEventListener('click',open);