import { FunctionComponent, ReactNode, useContext } from "react";

import Anchor from "../Anchor/Anchor";
import { ThemeContext } from "../Layout/Layout";
import Logo from "../Logo/Logo";
import Switcher from "../Switcher/Switcher";
import { getAnchors } from "./paramProps";

type anchorType = {
  Icon: ReactNode;
  name: string;
};

const SideBar: FunctionComponent = () => {
  const context = useContext(ThemeContext);
  const anchors = getAnchors(context.theme.mainColor);
  return (
    <div className="flex flex-col h-full w-full border-solid border-r-2 border-borderDark dark:border-borderLight">
      <Logo />
      <div className="grid  justify-center container pt-28 w-full text-center mx-auto">
        {anchors.map((anchorValues: anchorType) => (
          <Anchor key={anchorValues.name} name={anchorValues.name} Icon={anchorValues.Icon} />
        ))}
      </div>
      <div className="absolute bottom-5">
        <Switcher
          state={context.darkModeControler.darkMode}
          onChange={() =>
            context.darkModeControler.setDarkMode(!context.darkModeControler.darkMode)
          }
          themeSwitcher
        />
      </div>
    </div>
  );
};

export default SideBar;
