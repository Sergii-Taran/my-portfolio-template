import Swiper from "swiper";
import { Navigation, Keyboard } from "swiper/modules";
import "swiper/css";

const list = document.querySelector(".reviews__list");
const placeholder = document.querySelector(".reviews__placeholder");
const btnPrev = document.querySelector(".reviews__btn--prev");
const btnNext = document.querySelector(".reviews__btn--next");

const REVIEWS_URL = "/reviews.json";

async function loadReviews() {
  try {
    const response = await fetch(REVIEWS_URL);

    if (!response.ok) {
      throw new Error("Fetch error");
    }

    const data = await response.json();

    if (!data.length) {
      throw new Error("Empty data");
    }

    renderReviews(data);
    initSwiper();
  } catch (error) {
    alert("Failed to load reviews");
    placeholder.classList.remove("visually-hidden");
    list.innerHTML = "";
  }
}

function renderReviews(reviews) {
  list.innerHTML = reviews
    .map(
      ({ text, name, avatar }) => `
        <li class="reviews__item swiper-slide">
          <p class="reviews__text section__text">${text}</p>
          <div class="reviews_author">
            <img
              src="${avatar}"
              alt="photo of ${name}"
              class="reviews__avatar"
              width="40"
              height="40"
              loading="lazy"
            />
            <p class="reviews__name">${name}</p>
          </div>
        </li>
      `,
    )
    .join("");
}

let swiper;

function initSwiper() {
  swiper = new Swiper(".reviews__wrapper", {
    modules: [Navigation, Keyboard],

    slidesPerView: 1,
    spaceBetween: 16,

    breakpoints: {
      1280: {
        slidesPerView: 2,
        spaceBetween: 32,
      },
    },

    navigation: {
      prevEl: btnPrev,
      nextEl: btnNext,
    },

    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },

    on: {
      init: updateButtons,
      slideChange: updateButtons,
    },
  });
}

function updateButtons() {
  btnPrev.disabled = swiper.isBeginning;
  btnNext.disabled = swiper.isEnd;
}

loadReviews();
