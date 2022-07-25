import { Link } from "react-router-dom";
import "../css/navbar.css";

const Navbar = () => {
  const navbarList = ["feed", "about", "contact", "Account"];

  return (
    <div className="NavbarStyled">
      {navbarList.map((navbarItem, i) => {
        let path = "/" + navbarItem;
        return (
          <div className="NavItemStyled" key={i}>
            <Link to={path}>{navbarItem}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Navbar;
