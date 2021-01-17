import { FunctionComponent, ReactNode, useState } from "react";

import SideBar from "../SideBar/SideBar";
import Switcher from "../Switcher/Switcher";

type Props = {
  children?: ReactNode;
};

const Layout: FunctionComponent<Props> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode ? "dark" : ""} h-full w-full`}>
      <div className="bg-light dark:bg-dark h-full w-full">
        <Switcher state={darkMode} onChange={() => setDarkMode(!darkMode)} theme />
        <div className="grid grid-cols-10  h-full w-full justify-items-auto">
          <div>
            <SideBar />
          </div>
          <div id="children" className="col-span-9">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
