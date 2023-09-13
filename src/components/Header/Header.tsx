import "./Header.scss";
import logo from "../../assets/logo.png";
import Social from "../Social/Social";

const Header = () => {
  return (
    <header className="header">
      <Social />
      <img src={logo} alt="Star Wars" />
    </header>
  );
};

export default Header;
