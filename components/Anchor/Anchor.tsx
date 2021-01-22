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
      className="container mx-auto p-4">
      <div className="grid justify-center">{Icon}</div>
      <p className="text-dark dark:text-light pt-2">{name}</p>
    </button>
  );
};

export default Anchor;
