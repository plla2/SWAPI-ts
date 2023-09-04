import card1 from "../assets/CardImg/vehicles.webp";
import card2 from "../assets/CardImg/droids.webp";
import card3 from "../assets/CardImg/heros.webp";
import card4 from "../assets/CardImg/villains.webp";
import ImgSlide1 from "../assets/SliderImg/slider1.webp";
import ImgSlide2 from "../assets/SliderImg/slider2.webp";
import ImgSlide3 from "../assets/SliderImg/slider3.webp";

const cardsData = [
  {
    id: 0,
    image: card1,
    text: "Meet the Ships and Vehicles",
    link: "/starships",
  },
  {
    id: 1,
    image: card2,
    text: "Meet the Droids",
    link: "/actors",
  },
  {
    id: 2,
    image: card3,
    text: "Meet the Heroes",
    link: "/actors",
  },
  {
    id: 3,
    image: card4,
    text: "Meet the Villains",
    link: "/actors",
  },
];

const ImageSlide = [
  {
    id: 0,
    image: ImgSlide1,
    title: "WHAT'S THE GREATEST SHIP DESIGN IN STAR WARS?",
    text: "Learn about the secrets of star wars ships.",
    theme: "dark",
    color: "blue",
    button: "learn more",
    link: "/starships",
  },
  {
    id: 1,
    image: ImgSlide2,
    title: "STAR WARS INSIDE INTEL : THE PILOTS",
    text: "Jump into the cockpit for a dogfight of words",
    theme: "dark",
    color: "orange",
    button: "more details",
    link: "#!",
  },
  {
    id: 2,
    image: ImgSlide3,
    title: "HEROES OF STAR WARS",
    text: "We are all the Republic. Meet the actors behind-the-scenes.",
    theme: "dark",
    color: "gold",
    button: "read now",
    link: "/actors",
  },
];
export { cardsData, ImageSlide };
