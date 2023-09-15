import "./Header.scss";
import logo from "../../assets/logo.png";
import Social from "../Social/Social";

const Header = () => {
  return (
    <div className="container">
      <header className="header">
        <Social />
        <a href="/">
          <img src={logo} alt="Star Wars" />
        </a>
      </header>
    </div>
  );
};

export default Header;
