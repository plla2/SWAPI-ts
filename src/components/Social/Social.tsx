import githubIcon from "../../assets/Icons/github.svg";
import blogIcon from "../../assets/Icons/newspaper-outline.svg";
import "./Social.scss";

const Social = () => {
  return (
    <div className="social">
      <ul className="social_links">
        <li className="social_icon">
          <a href="https://github.com/plla2">
            <img className="iconImg" src={githubIcon} alt="" />
          </a>
        </li>
        <li className="social_icon">
          <a href="https://jhbljs92.tistory.com/">
            <img className="iconImg" src={blogIcon} alt="" />
          </a>
        </li>
      </ul>
      <a href="#!" className="social_kids">
        KIDS
      </a>
    </div>
  );
};

export default Social;
