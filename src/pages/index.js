import "../pages/index.scss";
import imgOne from "../images/furniture/01.jpg";
import imgTwo from "../images/furniture/02.jpg";
import imgThree from "../images/furniture/03.jpg";
import imgFour from "../images/furniture/04.jpg";
import imgFive from "../images/furniture/05.jpg";
import imgSix from "../images/furniture/06.jpg";
import imgSeven from "../images/furniture/07.jpg";
import imgEight from "../images/furniture/08.jpg";
import imgNine from "../images/furniture/09.jpg";

import {
  products,
  productsList,
  buttonMore,
  imageOne,
  imageTwo,
  imageThree,
  imageFour,
  imageFive,
  imageSix,
  imageSeven,
  imageEight,
  imageNine,
} from "../utils/constants";
import { mainSwiper, roomsSwiper, tipsSwiper } from "../components/slider";

imageOne.src = imgOne;
imageTwo.src = imgTwo;
imageThree.src = imgThree;
imageFour.src = imgFour;
imageFive.src = imgFive;
imageSix.src = imgSix;
imageSeven.src = imgSeven;
imageEight.src = imgEight;
imageNine.src = imgNine;

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

buttonMore.addEventListener("click", () => {
  const productsArr = productsList.querySelectorAll(".products__list-item");
  if (productsArr.length !== products.length) {
    getProducts(4, 8);
    buttonMore.style.display = "none";
  }
});

getProducts(0, 4);
