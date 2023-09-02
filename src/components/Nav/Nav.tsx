import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/starships">STARSHIPS</Link>
        </li>
        <li>
          <Link to="/actors">ACTORS</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
