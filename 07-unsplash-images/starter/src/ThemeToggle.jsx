import {useGlobalContext} from './context';
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemeToggle = () => {
    const { isDarkTheme, toggleDarkTheme } = useGlobalContext();

    return (
		<div className="toggle-container">
			<button onClick={toggleDarkTheme} 
					className={isDarkTheme?"dark-toggle dark-theme":"dark-toggle"}>
				{isDarkTheme?<FaMoon className='toggle-icon' />:<FaSun className='toggle-icon' />}
			</button>
		</div>
    );
};

export default ThemeToggle;
