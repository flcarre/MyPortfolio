import { createContext, FunctionComponent, ReactNode, useEffect, useState } from "react";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import SideBar from "../SideBar/SideBar";
import Switcher from "../Switcher/Switcher";
import {
  BackgroundContainer,
  ChildrenContainer,
  LayoutContainer,
  MainPartContainer,
  SideBarContainer,
  SwitcherContainer,
} from "./style";

type Props = {
  children?: ReactNode;
};

const getTheme = (isDark: boolean) => ({
  mainColor: isDark ? "#f8f1f1" : "#353353",
  oppositeColor: isDark ? "#353353" : "#f8f1f1",
});

export const ThemeContext = createContext({
  theme: getTheme(true),
});

const Layout: FunctionComponent<Props> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);
  const [theme, setTheme] = useState(getTheme(darkMode));

  useEffect(() => {
    setTheme(getTheme(darkMode));
  }, [darkMode]);

  return (
    <LayoutContainer>
      <ThemeContext.Provider value={{ theme }}>
        <SwitcherContainer>
          <Switcher state={darkMode} onChange={() => setDarkMode(!darkMode)} themeSwitcher />
        </SwitcherContainer>
        <BackgroundContainer backgroundColor={theme.oppositeColor}>
          <MainPartContainer>
            <SideBarContainer>
              <SideBar />
            </SideBarContainer>
            <ChildrenContainer>{children}</ChildrenContainer>
          </MainPartContainer>
        </BackgroundContainer>
      </ThemeContext.Provider>
    </LayoutContainer>
  );
};

export default Layout;
