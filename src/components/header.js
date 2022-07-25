import "../css/header.css";
import "../css/app.css";
import Logo from "../images/logo and icon PNGs/codeStationSquareLogo.png";
import placeHolder from "../images/Place holder images/harold.jpg";

const Header = () => {
  return (
    <div className="HeaderStyled">
      <div className="HeaderCircleFlex">
         <div className="LogoBackground">
          <img className="LogoStyle" src={Logo} alt="logo" />
          <h3 className="TagStyle">Your one stop for coding and community</h3>
          </div>
        <img className="Circle_1" src={placeHolder} alt="placeHolder" />
        <img className="Circle_2" src={placeHolder} alt="placeHolder" />
        <img className="Circle_3" src={placeHolder} alt="placeHolder" />
        <img className="Circle_4" src={placeHolder} alt="placeHolder" />
      </div>
    </div>
  );
};

export default Header;
