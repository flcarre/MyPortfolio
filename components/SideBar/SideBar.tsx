import { FunctionComponent, ReactNode, useContext } from "react";

import Anchor from "../Anchor/Anchor";
import { ThemeContext } from "../Layout/Layout";
import Logo from "../Logo/Logo";
import { getAnchors } from "./paramProps";
import { AnchorContainer, SideBarWrapper } from "./styles";

type anchorType = {
  Icon: ReactNode;
  name: string;
};

const SideBar: FunctionComponent = () => {
  const context = useContext(ThemeContext);
  const anchors = getAnchors(context.theme.mainColor, 22);
  const { theme } = context;
  return (
    <SideBarWrapper borderColor={theme.mainColor}>
      <Logo />
      <AnchorContainer>
        {anchors.map((anchorValues: anchorType) => (
          <Anchor key={anchorValues.name} name={anchorValues.name} Icon={anchorValues.Icon} />
        ))}
      </AnchorContainer>
    </SideBarWrapper>
  );
};

export default SideBar;
