import "./loginHeader.css";
// import LoginPic from "../../images/womanWithLaptop.jpg";
import LoginLogo from "../../images/codeStationSquareLogo 2.png";
// import Quote from "./pageComponents/quote/quote";

const LoginHeader = () => {
  return (
    <div className="LoginHeader">
      <div className="LeftBlock"></div>
      <div className="LeftImagePadding"></div>
      <div className="LogoBackgroundBlock">
        <div className="LoginImgHolder">
          <img className="LoginImg" src={LoginLogo} alt="Square Logo" />
        </div>
        </div>
        <div className="RightImagePadding"></div>
        <div className="RightContainer">
          <div className="TopHeaderStrip"></div>
          <div className="GreenHeaderStrip"></div>
          <div className="BottomHeaderStrip"></div>
          {/* <div><Quote /></div> */}
        </div>
    </div>
  );
};

export default LoginHeader;
