import { FunctionComponent } from "react";

import "tailwindcss/tailwind.css";

type Props = {
  text: string;
};

const Button: FunctionComponent<Props> = ({ text }) => (
  <button className="rounded shadow-md flex items-center shadow bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
    {text}
  </button>
);

export default Button;
