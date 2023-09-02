import "./Header.scss";
import logo from "../../assets/logo.png";
import Button from "../Button/Button";

const Header = () => {
  const handleOpenLogin = () => {
    console.log("loginOpen");
  };
  const handleOpenSignup = () => {
    console.log("signupOpen");
  };
  return (
    <header className="header">
      <img src={logo} alt="Star Wars" />
      <div>
        <Button open={handleOpenLogin} text={"log in"} />
        <Button open={handleOpenSignup} text={"sign up"} />
      </div>
    </header>
  );
};

export default Header;
