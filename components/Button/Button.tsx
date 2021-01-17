import { FunctionComponent, MouseEventHandler } from "react";

type Props = {
  text: string;
  onClick?: MouseEventHandler;
};

const Button: FunctionComponent<Props> = ({ text, onClick }) => (
  <button
    onClick={onClick}
    className="rounded shadow-md flex items-center shadow bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
    {text}
  </button>
);

export default Button;
