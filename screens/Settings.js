import React from 'react';
import { View, Text, Button } from 'react-native';

import { styles } from '../styles/Stylesheet';
import { useTheme } from '../theme-config/themesProvider';

export const Settings = () => {
    const { theme, updateTheme } = useTheme();
    const changeTheme = () => updateTheme(theme.themeMode);

    return (
        <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
            <Text style={[styles.heading, { borderBottomColor: theme.textColor, color: theme.textColor }]}>
                SETTINGS
            </Text>
            <View style={styles.settingsOption}>
                <Text style={[styles.text, styles.buttonText, { color: theme.textColor }]}>
                    Current Theme
                </Text>
                <Button
                    title={theme.themeMode !== 'default' ? 'Crazy Man' : 'Dark Mode'}
                    onPress={changeTheme}
                    style={styles.button}
                />
            </View>
        </View>
    );
}