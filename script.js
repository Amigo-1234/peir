document.addEventListener("DOMContentLoaded", () => {
  /* Mobile menu */
  const toggle = document.getElementById("menu-toggle");
  const nav = document.querySelector(".nav-links");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  }

  /* Scroll reveal */
  const reveals = document.querySelectorAll(".reveal");

  const revealOnScroll = () => {
    reveals.forEach((el) => {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;
      const revealPoint = 120;

      if (elementTop < windowHeight - revealPoint) {
        el.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

  /* Hero text slider */
  const slides = document.querySelectorAll(".hero-slide");
  let current = 0;
  const interval = 6500;

  if (!slides.length) return;

  slides[current].classList.add("active");

  setInterval(() => {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
  }, interval);
});
/* Facility modal */
const modal = document.getElementById("facilityModal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const closeBtn = document.querySelector(".modal-close");

const contentMap = {
  sensory: {
    title: "Sensory Room",
    text:
      "A controlled environment designed to support sensory regulation, relaxation, and emotional balance through tailored sensory experiences."
  },
  cinema: {
    title: "Cinema Room",
    text:
      "A comfortable media space that supports shared experiences, social engagement, and recreational activities."
  },
  arts: {
    title: "Arts & Crafts Area",
    text:
      "A creative space encouraging self-expression, confidence building, and fine motor skill development."
  },
  sports: {
    title: "Sports & Recreational Area",
    text:
      "A flexible area promoting physical activity, coordination, and overall wellbeing through structured programs."
  },
  garden: {
    title: "Garden Area",
    text:
      "An outdoor space supporting relaxation, light gardening activities, and connection with nature."
  },
  lounge: {
    title: "Lounge Room",
    text:
      "A shared social environment designed for rest, conversation, and informal interaction."
  }
};

document.querySelectorAll(".facility-card").forEach((card) => {
  card.addEventListener("click", () => {
    const key = card.dataset.modal;
    modalTitle.textContent = contentMap[key].title;
    modalText.textContent = contentMap[key].text;
    modal.classList.add("active");
  });
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.remove("active");
});
