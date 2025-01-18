// For navbar hamburger menu
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".navbar-items");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
  hamburger.classList.toggle("open");
});
// For navbar hamburger menu

// Modal Popup Js
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const closeModal = document.getElementById("closeModal");

  // Check if modal has already been shown
  if (!localStorage.getItem("modalShown")) {
    // Show modal after 3 seconds
    setTimeout(() => {
      modal.classList.add("active");

      // Set a flag in localStorage that the modal has been shown
      localStorage.setItem("modalShown", "true");
    }, 3000);
  }

  // Close modal on button click
  closeModal.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  // Close modal on clicking outside the content
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });
});

// Modal Popup Js

// Swiper Slider
var swiper1 = new Swiper(".mySwiper", {
  loop: true, 
  slidesPerView: 1, 
  spaceBetween: 30, 
  autoplay: {
    delay: 3000, 
    disableOnInteraction: false, 
  },
  navigation: {
    nextEl: ".swiper-button-next", 
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination", 
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 1, 
      spaceBetween: 0,
    },
    500: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    0: {
      slidesPerView: 1, 
      spaceBetween: 0,
    },
  },
});

var swiper2 = new Swiper(".mySwiper2", {
  loop: true, 
  slidesPerView: 3, 
  spaceBetween: 30, 
  autoplay: {
    delay: 9000, 
    disableOnInteraction: false, 
  },
  navigation: {
    nextEl: ".swiper-button-next", 
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination", 
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 3, 
      spaceBetween: 30,
    },
    500: {
      slidesPerView: 1, 
      spaceBetween: 0,
    },
    0: {
      slidesPerView: 1, 
      spaceBetween: 0,
    },
  },
});