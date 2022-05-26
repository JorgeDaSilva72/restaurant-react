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
  {
    id: 3,
    name: "Loukoums",
    decp: "marocains",
    price: "1.5",
    imageSrc: loukoum,
  },
];

export const categories = [
  {
    id: 1,
    name: "Loukoum",
    urlParamName: "loukoum",
  },
  {
    id: 2,
    name: "Curry",
    urlParamName: "curry",
  },
  {
    id: 3,
    name: "Rice",
    urlParamName: "rice",
  },
  {
    id: 4,
    name: "Fish",
    urlParamName: "fish",
  },
  {
    id: 5,
    name: "Fruits",
    urlParamName: "fruits",
  },
  {
    id: 6,
    name: "Icecreams",
    urlParamName: "icecreams",
  },

  {
    id: 7,
    name: "Soft Drinks",
    urlParamName: "drinks",
  },
];
