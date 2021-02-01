import { FiAward, FiBriefcase, FiHome, FiLayers, FiMessageCircle, FiUser } from "react-icons/fi";

export const getAnchors = (color: string, size: number) => [
  {
    name: "Acceuil",
    Icon: <FiHome color={color} size={size} />,
  },
  {
    name: "A propos",
    Icon: <FiUser color={color} size={size} />,
  },
  {
    name: "Experience",
    Icon: <FiBriefcase color={color} size={size} />,
  },
  {
    name: "Études",
    Icon: <FiAward color={color} size={size} />,
  },
  {
    name: "Projets",
    Icon: <FiLayers color={color} size={size} />,
  },
  {
    name: "Contact",
    Icon: <FiMessageCircle color={color} size={size} />,
  },
];
