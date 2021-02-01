import Switch from "@material-ui/core/Switch";
import { ChangeEvent, FunctionComponent, useContext } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

import { ThemeContext } from "../Layout/Layout";
import { SwitcherContainer } from "./styles";

type Props = {
  state: boolean;
  // eslint-disable-next-line no-unused-vars
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  themeSwitcher?: boolean;
};

const Switcher: FunctionComponent<Props> = ({ state, onChange, themeSwitcher }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event);
  };

  const context = useContext(ThemeContext);
  const { theme } = context;

  return (
    <SwitcherContainer>
      <Switch checked={state} onChange={handleChange} color="primary" name="Switcher" />
      {themeSwitcher && (
        <>
          {state ? (
            <FiMoon color={theme.mainColor} size="32" />
          ) : (
            <FiSun color={theme.mainColor} size="32" />
          )}
        </>
      )}
    </SwitcherContainer>
  );
};

export default Switcher;
