import Switch from "@material-ui/core/Switch";
import { ChangeEvent, FunctionComponent } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import resolveConfig from "tailwindcss/resolveConfig";

import tailwindConfig from "../../tailwind.config.js";

const tailwindConfigValues = resolveConfig(tailwindConfig);

type Props = {
  state: boolean;
  // eslint-disable-next-line no-unused-vars
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  theme?: boolean;
};

const Switcher: FunctionComponent<Props> = ({ state, onChange, theme }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event);
  };

  return (
    <div className="flex flex-row fixed top-5 right-10">
      <Switch checked={state} onChange={handleChange} color="primary" name="Switcher" />
      {theme && (
        <div className="flex items-center">
          {state ? (
            <FiMoon color={tailwindConfigValues.theme.colors.light} size="32" />
          ) : (
            <FiSun color={tailwindConfigValues.theme.colors.dark} size="32" />
          )}
        </div>
      )}
    </div>
  );
};

export default Switcher;
