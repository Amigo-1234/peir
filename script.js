document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const nav = document.querySelector(".nav-links");

  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
});

const reveals = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
  reveals.forEach((el) => {
    const windowsHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 120;

    if (elementTop < windowsHeight - revealPoint){
      el.classList.add('visible');
    };

  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// Hero text slider
const slides = document.querySelectorAll(".hero-slide");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 4000);
