import "./Preview.scss";
import { props } from "./Type";

const Preview = ({ data, changeSlide, current, interval }: props) => {
  return (
    <div className="preview">
      {data.map((item) => {
        return (
          <span
            className="preview__card"
            key={item.id}
            onClick={() => changeSlide(item.id)}
          >
            <div
              className={
                current === item.id && interval !== null
                  ? `preview__progress preview__progress-${item.color} preview__progress-animated`
                  : current === item.id && interval === null
                  ? `preview__progress preview__progress-${item.color} preview__progress-selected`
                  : `preview__progress preview__progress-${item.color}`
              }
            ></div>
            <img
              src={item.image}
              className={
                current === item.id
                  ? "preview__background preview__background-blur"
                  : "preview__background"
              }
              alt="프리뷰 사진"
            />
            <span className="preview__title">{item.title}</span>
          </span>
        );
      })}
    </div>
  );
};

export default Preview;
