import "./loginHeader.css";
// import LoginPic from "../../images/womanWithLaptop.jpg";
import LoginLogo from "../../images/codeStationSquareLogo 2.png";

const LoginHeader = () => {
  return (
    <div>
      <div className="LoginHeaderStyles">
        <div className="LoginImgHolder">
          <img className="LoginImg" src={LoginLogo} alt="Square Logo" />
        </div>
        <div className="Circle1"></div>
        <div className="Circle2"></div>
        <div className="Circle3"></div>
        <div className="Circle4"></div>
      </div>
    </div>
  );
};

export default LoginHeader;
