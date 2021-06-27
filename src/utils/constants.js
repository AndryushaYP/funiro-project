import img1 from "../images/products/01.jpg";
import img2 from "../images/products/02.jpg";
import img3 from "../images/products/03.jpg";
import img4 from "../images/products/04.jpg";
import img5 from "../images/products/05.jpg";
import img6 from "../images/products/06.jpg";
import img7 from "../images/products/07.jpg";
import img8 from "../images/products/08.jpg";
export const productsList = document.querySelector(".products__list");
export const buttonMore = document.querySelector(".products__button-more");
export const productsArr = productsList.querySelectorAll(".products__list-item");
export const productsButtons = document.querySelector(".psoducts__buttons");
export const products = [
  {
    id: 1,
    url: "#",
    title: "Syltherine",
    text: "Stylish cafe chair",
    label: "-30%",
    image: img1,
    price: "2.500.000",
    priceOld: "3.500.000",
    isLiked: false,
  },
  {
    id: 2,
    url: "#",
    title: "Leviosa",
    text: "Stylish cafe chair",
    label: "-30%",
    image: img2,
    price: "1.500.000",
    priceOld: "",
    isLiked: false,
  },
  {
    id: 3,
    url: "#",
    title: "Lolito",
    text: "Luxury big sofa",
    label: "-50%",
    image: img3,
    price: "7.000.000",
    priceOld: "14.000.000",
    isLiked: false,
  },

  {
    id: 4,
    url: "#",
    title: "Respira",
    text: "Minimalist fan",
    label: "New",
    image: img4,
    price: "500.000",
    priceOld: "",
    isLiked: false,
  },
  {
    id: 5,
    url: "#",
    title: "Grifo",
    text: "Night Lamp",
    label: "",
    image: img5,
    price: "1.500.000",
    priceOld: "",
    isLiked: false,
  },
  {
    id: 6,
    url: "#",
    title: "Muggo",
    text: "Small mug",
    label: "New",
    image: img6,
    price: "150.000",
    priceOld: "",
    isLiked: false,
  },
  {
    id: 7,
    url: "#",
    title: "Pingky",
    text: "Cute bed set",
    label: "-50%",
    image: img7,
    price: "7.000.000",
    priceOld: "14.000.000",
    isLiked: false,
  },
  {
    id: 8,
    url: "#",
    title: "Potty",
    text: "Minimalist flower pot",
    label: "New",
    image: img8,
    price: "500.000",
    priceOld: "",
    isLiked: false,
  },
];
