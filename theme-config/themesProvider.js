import React, { useState, createContext, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { defaultTheme, crazyManTheme } from './themes';

const ThemesContext = createContext();

const ThemesProvider = ({ children }) => {
    const [theme, setTheme] = useState(defaultTheme);
    const [isLoadingTheme, setLoading] = useState(true);

    /**
    * Find the current theme the app is in.
    */
    const findThemeAsync = async () => {
        const themeMode = await AsyncStorage.getItem('themeMode');

        // If no theme is set, set it to the default theme: dark mode
        // (who uses light mode, pls put an end to that suffering)
        if (themeMode !== null) {
            themeMode === 'default' ? setTheme(defaultTheme) : setTheme(crazyManTheme);
            setLoading(false);
        }

        setLoading(false);
    }

    /**
    * Function to update the theme.
    */
    const updateTheme = (currentTheme) => {
        // See what theme needs to be the new
        const newTheme = currentTheme === 'default' ? crazyManTheme : defaultTheme;
        setTheme(newTheme);

        // Store the current theme in AsyncStorage
        AsyncStorage.setItem('themeMode', newTheme.themeMode);
    }

    useEffect(() => {
        findThemeAsync();
    }, []);

    return (
        <ThemesContext.Provider value={{ theme, isLoadingTheme, updateTheme }}>
            {children}
        </ThemesContext.Provider>
    );
}

export const useTheme = () => useContext(ThemesContext);

export default ThemesProvider;