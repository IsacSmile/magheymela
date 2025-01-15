// For navbar hamburger menu 
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".navbar-items");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
  hamburger.classList.toggle("open");
});
// For navbar hamburger menu 






var swiper1 = new Swiper(".mySwiper", {
    loop: true, // Enable infinite loop
    slidesPerView: 1, // Default number of slides visible
    spaceBetween: 30, // Default space between slides
    autoplay: {
      delay: 3000, // Auto-slide every 2 seconds
      disableOnInteraction: false, // Keep autoplay active after user interaction
    },
    navigation: {
      nextEl: ".swiper-button-next", // Add navigation buttons if needed
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination", // Add pagination if needed
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 1, // For tablets and larger screens
        spaceBetween: 0,
      },
      500: {
        slidesPerView: 1, // For small tablets and larger phones
        spaceBetween: 0,
      },
      0: {
        slidesPerView: 1, // For mobile phones
        spaceBetween: 0,
      },
    },
  });

      var swiper2 = new Swiper(".mySwiper2", {
        loop: true, // Enable infinite loop
        slidesPerView: 3, // Default number of slides visible
        spaceBetween: 30, // Default space between slides
        autoplay: {
          delay: 9000, // Auto-slide every 2 seconds
          disableOnInteraction: false, // Keep autoplay active after user interaction
        },
        navigation: {
          nextEl: ".swiper-button-next", // Add navigation buttons if needed
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination", // Add pagination if needed
          clickable: true,
        },
        breakpoints: {
          768: {
            slidesPerView: 3, // For tablets and larger screens
            spaceBetween: 30,
          },
          500: {
            slidesPerView: 1, // For small tablets and larger phones
            spaceBetween: 0,
          },
          0: {
            slidesPerView: 1, // For mobile phones
            spaceBetween: 0,
          },
        },
      });

