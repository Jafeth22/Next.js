import { useState } from "react";
import DarkTheme from "./DarkTheme";

function loadDarkMode(){
    //It is undefined, because it runs first on server side
    if(typeof localStorage === 'undefined'){
        return false
    }
    const value = localStorage.getItem('darkMode')
    return (value === null) ? false : JSON.parse(value);
}

function ThemeSwitch(){
    const [darkMode, setDarkMode] = useState(loadDarkMode);
    console.log("[ThemeSwitch] darkMode", darkMode);

    const handleClick = (event) => {
        localStorage.setItem('darkMode', JSON.stringify(!darkMode));
        setDarkMode(!darkMode);
    }

    const text = darkMode ? 'Light Mode' : 'Dark Mode'
    return(
        // suppressHydrationWarning = It makes warning go away, use only in special cases
        <>
            <button onClick={handleClick} suppressHydrationWarning>
                {text}
            </button>
            <style jsx>{`
            button {
                background: none;
                border: none;
                color: inherit; 
                cursor: pointer;
            }`}</style>
            {darkMode && <DarkTheme/>}
        </>
    );
}

export default ThemeSwitch;