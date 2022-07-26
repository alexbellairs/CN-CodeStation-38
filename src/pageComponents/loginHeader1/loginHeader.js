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
      </div>
    </div>
  );
};

export default LoginHeader;
