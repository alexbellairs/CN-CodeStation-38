import {
  Circle1,
  Circle2,
  Circle3,
  Circle4,
  LoginHeaderStyles,
  LoginImg,
  LoginImgHolder,
} from "./loginHeader.styles";
// import LoginPic from "../../images/womanWithLaptop.jpg";
import LoginLogo from "../../images/codeStationSquareLogo 2.png";

const LoginHeader = () => {
  return (
    <div>
      <LoginHeaderStyles>
        <LoginImgHolder>
          <LoginImg src={LoginLogo} alt="Square Logo" />
        </LoginImgHolder>
        <Circle1></Circle1>
        <Circle2></Circle2>
        <Circle3></Circle3>
        <Circle4></Circle4>

        {/* <img src={LoginPic} alt="Woman with laptop" /> */}
      </LoginHeaderStyles>
    </div>
  );
};

export default LoginHeader;
