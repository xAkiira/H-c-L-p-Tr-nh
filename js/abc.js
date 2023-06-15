let search = document.querySelector('.search-box');

document.querySelector('#search-icons').onclick = () => {
    search.classList.toggle('active');
    user.classList.remove('active');
    cart.classList.remove('active');
}

let cart = document.querySelector('.cart');

document.querySelector('#cart-icons').onclick = () => {
    cart.classList.toggle('active');
    user.classList.remove('active');
    search.classList.remove('active');
}

let user = document.querySelector('.user');

document.querySelector('#user-icons').onclick = () => {
    user.classList.toggle('active');
    search.classList.remove('active');
    cart.classList.remove('active');
}

let header = document.querySelector('header');

window.addEventListener('scroll', () => {
  header.classList.toggle('shadow', window.scrollY > 0);
});

var swiper = new Swiper(".new-arrival", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });  