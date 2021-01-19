import Switch from "@material-ui/core/Switch";
import { ChangeEvent, FunctionComponent, useContext } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

import { ThemeContext } from "../Layout/Layout";

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

  const theme = useContext(ThemeContext);

  return (
    <div className="flex flex-row fixed top-5 right-10">
      <Switch checked={state} onChange={handleChange} color="primary" name="Switcher" />
      {themeSwitcher && (
        <div className="flex items-center">
          {state ? (
            <FiMoon color={theme.mainColor} size="32" />
          ) : (
            <FiSun color={theme.mainColor} size="32" />
          )}
        </div>
      )}
    </div>
  );
};

export default Switcher;
