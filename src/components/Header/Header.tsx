import "./Header.scss";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Star Wars" />
    </header>
  );
};

export default Header;
