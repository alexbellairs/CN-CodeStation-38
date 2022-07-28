// My name is John Bridges and I worked on the Train logo animation using Framer-motion from the npm library.

import { HeaderStyled, HeaderLogo } from "./header.styles";
import Logo from "../../images/codeStationRectangleLogo.png";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <HeaderStyled>
      <motion.div
        initial={{
          x: -420,
        }}
        animate={{
          x: 0,
        }}
        transition={{
          delay: 1,
          duration: 10,
          type: "spring",
          stiffness: 200,
        }}
      >
        <HeaderLogo src={Logo} alt="logo" style={{ width: "400px" }} />
      </motion.div>
    </HeaderStyled>
  );
};

export default Header;
