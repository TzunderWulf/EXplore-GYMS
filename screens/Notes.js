import React from 'react';
import { View, Text } from 'react-native';

import { styles } from '../styles/Stylesheet';
import { useTheme } from '../theme-config/themesProvider';

export const Notes = () => {
    const { theme } = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
            <Text style={[styles.heading, { borderBottomColor: theme.textColor, color: theme.textColor }]}>
                SAVED NOTES FROM YOUR ADVENTURE
            </Text>
        </View>
    );
}