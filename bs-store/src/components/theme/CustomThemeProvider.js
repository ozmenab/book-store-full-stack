import { ThemeProvider } from '@mui/material'
import {darkTheme,lightTheme} from "./index";
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';

function CustomThemeProvider({children}) {

    const {theme} = useSelector(state => state.setting);
    const [currentTheme, setCurrentTheme] = useState(lightTheme);

    useEffect(() => {
        switch (theme) {
            // case 'theme1':
            //     setCurrentTheme(theme1);
            //     break;
            // case 'theme2':
            //     setCurrentTheme(theme2);
            //     break;
            // case 'theme3':
            //     setCurrentTheme(theme3);
            //     break;
            case 'darkTheme':
                setCurrentTheme(darkTheme);
                break;
            case 'lightTheme':
                setCurrentTheme(lightTheme);
                break;
            default:
                setCurrentTheme(lightTheme)
                break;
        }
    },[theme]);
  return (
    <ThemeProvider theme={currentTheme}>
        <CssBaseline />
        {children}
        </ThemeProvider>
  )
}

export default CustomThemeProvider;