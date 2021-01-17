import { FunctionComponent } from "react"
import Switch from '@material-ui/core/Switch';
import { FiSun, FiMoon } from "react-icons/fi";

import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config.js'

const tailwindConfigValues = resolveConfig(tailwindConfig)

type Props = {
    state: boolean,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void,
    theme?: boolean
}


const Switcher: FunctionComponent<Props> = ({ state, handleChange, theme }) => {
    return (
        <div className="flex flex-row fixed top-5 right-10">
            <Switch
                checked={state}
                onChange={handleChange}
                color="primary"
                name="Switcher"
            />
            {theme &&
                <div className="flex items-center">
                    {state ? <FiMoon color={tailwindConfigValues.theme.colors.light} size="32" /> : <FiSun color={tailwindConfigValues.theme.colors.dark} size="32" />}
                </div>
            }
        </div>
    )
}

export default Switcher