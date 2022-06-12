import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons";

import { Map } from '../screens/Map';
import { List } from '../screens/List';
import { Settings } from '../screens/Settings';
import { Notes } from '../screens/Notes';
import { useTheme } from '../theme-config/themesProvider';

const Tab = createBottomTabNavigator();

export const AppNavigation = () => {
    const { theme } = useTheme();

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: theme.navigation.backgroundColor
                },
                tabBarActiveTintColor: theme.navigation.active,
                tabBarInactiveTintColor: theme.navigation.inactive,
                headerShown: false,
            }}
        >
            <Tab.Screen
                name="Map"
                component={Map}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Ionicons name="map-outline" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="List"
                component={List}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Ionicons name="list" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Notes"
                component={Notes}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Ionicons name="reader-outline" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Settings"
                component={Settings}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Ionicons name="settings-outline" size={size} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    );
}