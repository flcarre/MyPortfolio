import { FunctionComponent, ReactNode } from "react";

type Props = {
  Icon: ReactNode;
  name: string;
};

const Anchor: FunctionComponent<Props> = ({ Icon, name }) => {
  return (
    <button
      onClick={() => {
        console.log(name);
      }}
      className="container mx-auto w-full p-4">
      {Icon}
    </button>
  );
};

export default Anchor;
