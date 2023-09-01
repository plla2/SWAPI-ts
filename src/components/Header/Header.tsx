import "./Header.scss";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="Star Wars" />
      <div>
        <button aria-label="log in">LOG IN</button>
        <button aria-label="sign up">SIGN UP </button>
      </div>
    </div>
  );
};

export default Header;
