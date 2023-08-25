import "lazysizes";

import Swiper from "swiper";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/scss";
import "swiper/scss/pagination";
// import "swiper/scss/navigation";

const swiper = new Swiper("#swiper", {
  direction: "horizontal",
  slidesPerView: 1,
  spaceBetween: 0,
  // autoHeight: true,
  modules: [Pagination, Navigation],
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    prevEl: ".product__button-prev",
    nextEl: ".product__button-next",
  },
});

const reviews = new Swiper("#reviews-gallery", {
  direction: "horizontal",
  slidesPerView: 2,
  spaceBetween: 10,
  // autoHeight: true,
  modules: [Navigation],
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// const form = document.getElementById("form");

// form.addEventListener("submit", async (e) => {
//   e.preventDefault();
//   try {
//     const { data } = await axios.post("/api/", form, {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//   } catch (e) {
//     console.log(e);
//   }
// });
