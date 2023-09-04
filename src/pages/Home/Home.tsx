import mainImg from "../../assets/mainImg.webp";
import { Link } from "react-router-dom";
import { cardsData } from "../../constant/Const";
import Card from "../../components/Card/Card";
import "./Home.scss";
import ImageSlider from "../../components/ImageSlider/ImageSlider";

const Home = () => {
  return (
    <>
      <ImageSlider />
      <section className="cards">
        <div className="cards__header">
          <img src={mainImg} alt="메인이미지" className="cards__image" />
          <div className="cards__header-info">
            <h2>A new era of Star Wars.</h2>
            <Link to="#!">START</Link>
          </div>
        </div>
        <div className="cards__body">
          {cardsData.map((card) => {
            return (
              <Link to={card.link} key={card.id}>
                <Card text={card.text} image={card.image} />
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Home;
