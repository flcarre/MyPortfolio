import { FunctionComponent, ReactNode, useContext } from "react";
import { FiAward, FiBriefcase, FiHome, FiLayers, FiMessageCircle, FiUser } from "react-icons/fi";

import Anchor from "../Anchor/Anchor";
import { ThemeContext } from "../Layout/Layout";
import Logo from "../Logo/Logo";

type anchorType = {
  Icon: ReactNode;
  name: string;
};

const getAnchors = (color: string) => [
  {
    name: "Acceuil",
    Icon: <FiHome color={color} size={32} />,
  },
  {
    name: "A propos",
    Icon: <FiUser color={color} size={32} />,
  },
  {
    name: "Experience",
    Icon: <FiBriefcase color={color} size={32} />,
  },
  {
    name: "Études",
    Icon: <FiAward color={color} size={32} />,
  },
  {
    name: "Projets",
    Icon: <FiLayers color={color} size={32} />,
  },
  {
    name: "Me contacter",
    Icon: <FiMessageCircle color={color} size={32} />,
  },
];

const SideBar: FunctionComponent = () => {
  const theme = useContext(ThemeContext);
  const anchors = getAnchors(theme.mainColor);
  return (
    <div className="flex flex-col h-full w-full border-solid border-r-2 border-borderDark dark:border-borderLight">
      <Logo />
      <div className="grid  justify-center container pt-32 w-full text-center mx-auto">
        {anchors.map((anchorValues: anchorType) => (
          <Anchor key={anchorValues.name} name={anchorValues.name} Icon={anchorValues.Icon} />
        ))}
      </div>
    </div>
  );
};

export default SideBar;
