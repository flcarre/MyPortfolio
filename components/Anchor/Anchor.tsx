import { FunctionComponent, ReactNode, useContext } from "react";

import { ThemeContext } from "../Layout/Layout";
import { AnchorText, AnchorWrapper } from "./styles";

type Props = {
  Icon: ReactNode;
  name: string;
};

const Anchor: FunctionComponent<Props> = ({ Icon, name }) => {
  const context = useContext(ThemeContext);
  const { theme } = context;
  return (
    <AnchorWrapper
      onClick={() => {
        console.log(name);
      }}>
      {Icon}
      <AnchorText textColor={theme.mainColor}>{name}</AnchorText>
    </AnchorWrapper>
  );
};

export default Anchor;
