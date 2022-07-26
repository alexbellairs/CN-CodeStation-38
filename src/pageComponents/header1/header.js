import { HeaderStyled, HeaderLogo } from "./header.styles";

import Logo from "../../images/codeStationRectangleLogo.png";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <HeaderStyled>
      <motion.div
        initial={{ x: -500 }}
        animate={{ x: 500 }}
        transition={{ delay: 1, duration: 20 }}
      >
        <HeaderLogo src={Logo} alt="logo" />
      </motion.div>{" "}
    </HeaderStyled>
  );
};

export default Header;
