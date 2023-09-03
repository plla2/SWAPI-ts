import card1 from "../assets/CardImg/vehicles.webp";
import card2 from "../assets/CardImg/droids.webp";
import card3 from "../assets/CardImg/heros.webp";
import card4 from "../assets/CardImg/villains.webp";
import ImgSlide1 from "../assets/SliderImg/slider1.webp";
import ImgSlide2 from "../assets/SliderImg/slider2.webp";
import ImgSlide3 from "../assets/SliderImg/slider3.webp";

const cardsData = [
  {
    image: card1,
    text: "Meet the Ships and Vehicles",
    link: "/starships",
  },
  {
    image: card2,
    text: "Meet the Droids",
    link: "/actors",
  },
  {
    image: card3,
    text: "Meet the Heroes",
    link: "/actors",
  },
  {
    image: card4,
    text: "Meet the Villains",
    link: "/actors",
  },
];

const ImageSlide = [
  {
    image: ImgSlide1,
    title: "WHAT'S THE GREATEST SHIP DESIGN IN STAR WARS?",
    text: "Learn about the secrets of star wars ships.",
    theme: "light",
    color: "blue",
    button: "learn more",
    link: "/starships",
  },
  {
    image: ImgSlide2,
    title: "STAR WARS INSIDE INTEL : THE PILOTS",
    text: "Jump into the cockpit for a dogfight of words",
    theme: "dark",
    color: "orange",
    button: "more details",
    link: "#!",
  },
  {
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
