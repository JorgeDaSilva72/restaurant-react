import loukoum from "../img/loukoum.jpg";
import burger from "../img/Categorie/burger.png";
import C3 from "../img/Categorie/pizza1.png";

export const heroData = [
  {
    id: 1,
    name: "Pizzas",
    decp: "au feu de bois ",
    price: "8",
    imageSrc: C3,
  },

  {
    id: 2,
    name: "Hamburgers",
    decp: "100 % pur boeuf",
    price: "5",
    imageSrc: burger,
  },
];

export const categories = [
  {
    id: 1,
    name: "Pizza",
    urlParamName: "pizzas",
  },
  {
    id: 2,
    name: "Hamburger",
    urlParamName: "hamburger",
  },
  {
    id: 3,
    name: "Loukoum",
    urlParamName: "loukoum",
  },

  {
    id: 4,
    name: "Boisson",
    urlParamName: "drinks",
  },
];
