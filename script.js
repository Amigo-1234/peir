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
// =====================
// SERVICES MODAL LOGIC
// =====================

const modal = document.getElementById("facilityModal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const closeBtn = document.querySelector(".modal-close");

const serviceContent = {
  buying: {
    title: "Buying & Selling",
    text: "We guide clients through every stage of buying or selling property, ensuring informed decisions, strong negotiation, and smooth transactions."
  },
  rentals: {
    title: "Rentals & Leasing",
    text: "From residential to commercial leasing, we connect the right tenants with the right properties through transparent and efficient processes."
  },
  management: {
    title: "Property Management",
    text: "Our property management services protect your investment by handling tenants, maintenance, compliance, and reporting with professionalism."
  },
  investment: {
    title: "Investment Advisory",
    text: "We provide market insights and strategic advice to help investors identify opportunities and maximize long-term property value."
  },
  development: {
    title: "Project & Land Development",
    text: "Supporting land acquisition and development projects with planning insight, feasibility guidance, and execution support."
  },
  consultation: {
    title: "Consultation & Valuation",
    text: "Professional consultations and property valuations to support confident, data-driven real estate decisions."
  }
};

// Open modal
document.querySelectorAll(".facility-card").forEach(card => {
  card.addEventListener("click", () => {
    const key = card.dataset.modal;
    if (!serviceContent[key]) return;

    modalTitle.textContent = serviceContent[key].title;
    modalText.textContent = serviceContent[key].text;

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  });
});

// Close modal
closeBtn.addEventListener("click", closeModal);
modal.addEventListener("click", e => {
  if (e.target === modal) closeModal();
});

function closeModal() {
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".media-slide");
  const thumbs = document.querySelectorAll(".media-thumbs button");

  if (!slides.length) return;

  let activeIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      const video = slide.querySelector("video");

      slide.classList.toggle("active", i === index);

      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    });

    const activeSlide = slides[index];
    const activeVideo = activeSlide.querySelector("video");

    if (activeVideo) {
      activeVideo.play().catch(() => {});
    }

    activeIndex = index;
  }

  thumbs.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      showSlide(index);
    });
  });

  // Ensure first slide is visible
  showSlide(0);
});
