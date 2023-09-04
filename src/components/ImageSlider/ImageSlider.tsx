import { useEffect, useRef, useState } from "react";
import Button from "../Button/Button";
import { ImageSlide } from "../../constant/Const";
import { Link } from "react-router-dom";
import Preview from "../Preview/Preview";
import "./ImageSlider.scss";

const ImageSlider = () => {
  const [current, setCurrent] = useState<number>(0);
  const intervalSlider = useRef<number | null>(null);

  const cardSlide = (slide: number) => {
    setCurrent(slide);
    if (intervalSlider.current) {
      clearInterval(intervalSlider.current);
      intervalSlider.current = null;
    }
  };

  const prevSlide = () => {
    setCurrent((current) =>
      current === 0 ? ImageSlide.length - 1 : current - 1
    );
    if (intervalSlider.current) {
      clearInterval(intervalSlider.current);
      intervalSlider.current = null;
    }
  };

  const nextSlide = () => {
    setCurrent((current) =>
      current === ImageSlide.length - 1 ? 0 : current + 1
    );
    if (intervalSlider.current) {
      clearInterval(intervalSlider.current);
      intervalSlider.current = null;
    }
  };

  useEffect(() => {
    intervalSlider.current = setInterval(() => {
      setCurrent((current) =>
        current === ImageSlide.length - 1 ? 0 : current + 1
      );
    }, 6000);
    return () => {
      if (intervalSlider.current) {
        clearInterval(intervalSlider.current);
        intervalSlider.current = null;
      }
    };
  }, []);

  useEffect(() => {
    const allImages = document.querySelectorAll(
      ".slider__item"
    ) as NodeListOf<HTMLElement>;
    for (const img of allImages) {
      img.style.transform = `translateX(-${current}00%)`;
    }
  }, [current]);

  return (
    <section className="slider" id="slider" data-testid="slider">
      <Button
        open={prevSlide}
        text={<i className="fa-solid fa-chevron-left"></i>}
        name={"slider__button slider__button-left"}
      />
      <Button
        open={nextSlide}
        text={<i className="fa-solid fa-chevron-right"></i>}
        name={"slider__button slider__button-right"}
      />
      <ul className="slider__container">
        {ImageSlide.map((item) => {
          return (
            <li
              key={item.id}
              className={`slider__item slider__item-${item.theme}`}
            >
              <img
                src={item.image}
                alt="이미지 슬라이더 이미지"
                className="slider__image"
              />
              <div className={`slider__info slider__info-${item.color}`}>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
                <Link to={item.link}>{item.button}</Link>
              </div>
            </li>
          );
        })}
      </ul>
      <Preview
        data={ImageSlide}
        changeSlide={cardSlide}
        current={current}
        interval={intervalSlider.current}
      />
    </section>
  );
};

export default ImageSlider;
