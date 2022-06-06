import React, { useEffect, useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { MapScreen } from './MapScreen';
import { ListScreen } from './ListScreen';
import { SettingsScreen } from './SettingsScreen';

export default function App() {
    const Tab = createBottomTabNavigator();

    return(
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='List'
                screenOptions={{
                    tabBarActiveTintColor: '#DC143C',
                }}
            >
                <Tab.Screen 
                    name="Map" 
                    component={MapScreen}
                    options={{
                        tabBarIcon: ({size, color}) => (
                            <Ionicons name="map-outline" size={size} color={color} />
                        )
                    }}
                />
                <Tab.Screen 
                    name="List" 
                    component={ListScreen} 
                    options={{
                        tabBarIcon: ({size, color}) => (
                            <Ionicons name="list" size={size} color={color} />
                        )
                    }}
                />
                <Tab.Screen 
                    name="Settings" 
                    component={SettingsScreen} 
                    options={{
                        tabBarIcon: ({size, color}) => (
                            <Ionicons name="settings-outline" size={size} color={color} />
                        )
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
