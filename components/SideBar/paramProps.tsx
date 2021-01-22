import { FiAward, FiBriefcase, FiHome, FiLayers, FiMessageCircle, FiUser } from "react-icons/fi";

export const getAnchors = (color: string) => [
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
    name: "Contact",
    Icon: <FiMessageCircle color={color} size={32} />,
  },
];
