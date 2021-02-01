import { FunctionComponent, useContext } from "react";

import { ThemeContext } from "../Layout/Layout";
import { LogoWrapper } from "./styles";

const Logo: FunctionComponent = () => {
  const context = useContext(ThemeContext);
  const { theme } = context;
  return <LogoWrapper textColor={theme.mainColor}>F.</LogoWrapper>;
};

export default Logo;
