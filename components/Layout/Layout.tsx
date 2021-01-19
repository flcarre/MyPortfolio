import { createContext, FunctionComponent, ReactNode, useEffect, useState } from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import resolveConfig from "tailwindcss/resolveConfig";

import tailwindConfig from "../../tailwind.config.js";
import SideBar from "../SideBar/SideBar";
import Switcher from "../Switcher/Switcher";

type Props = {
  children?: ReactNode;
};

const getTheme = (isDark: boolean) => {
  const tailwindConfigValues = resolveConfig(tailwindConfig);

  return {
    mainColor: isDark
      ? tailwindConfigValues.theme.colors.light
      : tailwindConfigValues.theme.colors.dark,
  };
};

export const ThemeContext = createContext(getTheme(true));

const Layout: FunctionComponent<Props> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);
  const [theme, setTheme] = useState(getTheme(darkMode));

  useEffect(() => {
    setTheme(getTheme(darkMode));
  }, [darkMode]);

  return (
    <div className={`${darkMode ? "dark" : ""} h-full w-full`}>
      <ThemeContext.Provider value={theme}>
        <div className="bg-light dark:bg-dark h-full w-full">
          <Switcher state={darkMode} onChange={() => setDarkMode(!darkMode)} themeSwitcher />
          <div className="flex h-full w-full justify-items-auto">
            <div className="w-32">
              <SideBar />
            </div>
            <div id="children" className="col-span-11">
              {children}
            </div>
          </div>
        </div>
      </ThemeContext.Provider>
    </div>
  );
};

export default Layout;
