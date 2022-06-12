import React, { useState, useEffect } from 'react';
import { View, FlatList, ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

import { useTheme } from '../theme-config/themesProvider';
import { styles } from '../styles/Stylesheet';

export const List = ({ navigation }) => {
    const [data, setData] = useState([]);
    const [isFetching, setFetching] = useState(true);
    const { theme } = useTheme();
    const [modalVisibility, setModalVisibility] = useState(false)

    /**
    * Fetch gyms from webservice.
    */
    const getGyms = () => {
        fetch('https://pokeapi.co/api/v2/pokemon/')
            .then((response) => { response.json(); console.log(response) })
            .then((results) => {
                // setData(results.gyms);
                // console.log(results)
                setFetching(false);
            })
            .catch((error) => console.log(error));
    };

    /**
    * Function to render an item of the flatlist.
    * 
    * @param item
    */
    const renderItem = ({ item }) => {
        return (
            <View style={[styles.item, { borderBottomColor: theme.textColor }]}>
                <Text style={[styles.text, { color: theme.textColor }]}>
                    {item.name}
                </Text>
                <View style={styles.itemInfo}>
                    <Ionicons name="locate-outline" size={16} color={theme.textColor} />
                    <Text style={[styles.itemSubtitle, { color: theme.textColor }]}>
                        {item.lat}, {item.long}
                    </Text>
                </View>
                <View style={styles.itemButtons}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Map', { latitude: item.lat, longitude: item.long });
                        }}
                    >
                        <Ionicons name="location" size={40} color={theme.textColor} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { console.log(`Add note for ${item.id}`); setModalVisibility(true) }}
                    >
                        <Ionicons name="add-circle" size={40} color={theme.textColor} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    useEffect(() => {
        getGyms();
    }, []);

    return (
        <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
            <Text style={[styles.heading, { borderBottomColor: theme.textColor, color: theme.textColor }]}>
                ALL EX RAID GYMS
            </Text>
            {isFetching ? <ActivityIndicator size="large" color="#DC143C" /> : (
                <FlatList
                    data={data}
                    keyExtractor={({ id }) => id}
                    renderItem={renderItem}
                />
            )}
        </View>
    );
}