import "../pages/index.scss";
import {
  products,
  productsList,
  buttonMore,
  slides,
  slideLink,
  buttonArrow,
} from "../utils/constants";
console.log(slideLink);
const createProduct = () => {
  const template = document.querySelector("#product-template").content;
  const productElement = template.querySelector(".product__overlay").cloneNode(true);
  const productButtons = productElement.querySelector(".products__buttons");
  productElement.addEventListener("mouseover", (evt) => {
    productButtons.style.display = "flex";
  });
  productElement.addEventListener("mouseout", (evt) => {
    productButtons.style.display = "none";
  });
  return productElement;
};
const getProducts = (start, end) => {
  products.slice(start, end).forEach((item) => {
    const productElement = createProduct();
    productElement.querySelector(".products__image").src = item.image;
    productElement.querySelector(".products__title").textContent = item.title;
    productElement.querySelector(".products__description").textContent = item.text;
    productElement.querySelector(".products__price").textContent = `Rp ${item.price}`;
    productElement.querySelector(".products__label").textContent = item.label;
    if (item.label === "New") {
      productElement.querySelector(".products__label").classList.add("products__label_new");
    } else if (item.label === "") {
      productElement.querySelector(".products__label").style.display = "none";
    } else {
      productElement.querySelector(".products__label").classList.add("products__label_sale");
    }
    if (item.priceOld !== "") {
      productElement.querySelector(".products__price_old").textContent = `Rp ${item.priceOld}`;
    }
    productElement.querySelector(".products__buttons");
    productsList.append(productElement);
  });
};

/* const checkActiveSlide = () => {
  Array.from(slides).forEach((item) => {
    if (item.classList.contains("active-slide")) {
      slideLink.style.display = "flex";
    }
  });
}; */

buttonMore.addEventListener("click", () => {
  const productsArr = productsList.querySelectorAll(".products__list-item");
  if (productsArr.length !== products.length) {
    getProducts(4, 8);
    buttonMore.style.display = "none";
  }
});

const swiper = new Swiper(".main-slider__swiper-container", {
  loop: true,
  spaceBetween: 32,
  slidesOffsetBefore: 405,
  slidesPerView: "auto",
  slideActiveClass: "active-slide",

  // If we need pagination
  pagination: {
    el: ".main-slider__pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".main-slider__button_next",
    prevEl: ".main-slider__button_prev",
  },
});

/* checkActiveSlide(); */
getProducts(0, 4);
