import { createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [mode, setMode] = useState(false);

    const handleTheme = () => {
        setMode(!mode);
    };

    const theme = {
        mode, handleTheme
    };

    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeContext, ThemeProvider }; 
