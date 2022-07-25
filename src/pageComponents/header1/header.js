import { HeaderStyled, HeaderLogo } from "./header.styles";

import Logo from "../../images/codeStationRectangleLogo.png";

const Header = () => {
  return (
    <HeaderStyled>
      <HeaderLogo src={Logo} alt="logo" />
    </HeaderStyled>
  );
};

export default Header;
