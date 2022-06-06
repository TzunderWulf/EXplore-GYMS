import React, { useEffect, useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { MapScreen } from './MapScreen';
import { ListScreen } from './ListScreen';
import { SettingsScreen } from './SettingsScreen';

export default function App() {
    const Tab = createBottomTabNavigator();
    const [gyms, setGyms] = useState([]);

    const fetchGyms = () => {
        fetch('https://stud.hosted.hr.nl/1006859/webservice/gymList.json')
            .then((response) => response.json())
            .then((data) => setGyms(data["ex-raid-gyms"]))
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        fetchGyms();
    }, [])

    return(
        <NavigationContainer>
            <Tab.Navigator
                initialParams={{listOfGyms: gyms}}
                screenOptions={{
                    tabBarActiveTintColor: '#e91e63',
                }}
            >
                <Tab.Screen 
                    name="Map" 
                    component={MapScreen}
                    initialParams={{ listOfGyms: gyms }}
                    options={{
                        tabBarIcon: ({size, color}) => (
                            <Ionicons name="map-outline" size={size} color={color} />
                        )
                    }}
                />
                <Tab.Screen 
                    name="List" 
                    component={ListScreen} 
                    initialParams={{ listOfGyms: gyms }}
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
