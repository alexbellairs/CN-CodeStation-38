import "../css/header.css";
import "../css/app.css";
import Logo from "../images/logo and icon PNGs/codeStationRectangleLogo.png";

const Header = () => {
  return (
    <div className="HeaderStyled">
      <div className="Position">
        <img className="ImgStyle" src={Logo} alt="logo" />

        <div className="Circle_1" />
        <div className="Circle_1" />
        <div className="Circle_1" />
        <div className="Circle_1" />
      </div>

      {/* <h1 className="Header1Styled">Header Banner</h1> */}
    </div>
  );
};

export default Header;
