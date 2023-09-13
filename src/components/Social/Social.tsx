import githubIcon from "../../assets/Icons/logo-github.svg";
import blogIcon from "../../assets/Icons/newspaper-outline.svg";

const Social = () => {
  return (
    <div>
      <ul>
        <li>
          <a href="https://github.com/plla2">
            <img src={githubIcon} alt="" />
          </a>
        </li>
        <li>
          <a href="https://jhbljs92.tistory.com/">
            <img src={blogIcon} alt="" />
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
