import { LoginHeaderStyles, LoginImg } from "./loginHeader.styles";
// import LoginPic from "../../images/womanWithLaptop.jpg";
import LoginLogo from "../../images/codeStationSquareLogo 2.png";

const LoginHeader = () => {
  return (
    <div>
      <LoginHeaderStyles>
        <LoginImg src={LoginLogo} alt="Square Logo" />
        {/* <img src={LoginPic} alt="Woman with laptop" /> */}
      </LoginHeaderStyles>
    </div>
  );
};

export default LoginHeader;
