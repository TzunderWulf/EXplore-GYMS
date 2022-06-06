import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { styles } from './Stylesheet';

export const ListScreen = ({ navigation }) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getMovies = async () => {
        try {
            fetch('https://stud.hosted.hr.nl/1006859/webservice/gymList.json')
                .then((response) => response.json())
                .then((data) => setData(data['ex-raid-gyms']))
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false);
        }
    }

    const renderItem = ({ item }) => {
        return(
            <View style={styles.listItem}>
                <View style={styles.itemInfo}>
                    <Text style={styles.itemHeading}>{item.name}</Text>
                    <View style={styles.itemLocation}>
                        <Ionicons name="locate" size={20} color="black" />
                        <Text style={styles.itemCoords}>{item.lat}, {item.long}</Text>
                    </View>
                </View>
                <View style={styles.itemButtons}>
                    <TouchableOpacity 
                        style={styles.itemButton}
                        onPress={() => navigation.navigate("Map", {id: item.id})}
                    >
                        <Ionicons name="location" size={45} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itemButton}>
                        <Ionicons name="information" size={45} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    useEffect(() => {
        getMovies();
    }, [])

    return(
        <View style={styles.container}>
            <Text style={styles.screenHeading}>ALL EX RAID GYMS</Text>
            {isLoading ? <ActivityIndicator size="large" color="#e91e63" /> : (
                <FlatList
                    data={data}
                    keyExtractor={({ id }) => id}
                    renderItem={renderItem}
                />
            )}
        </View>
    );
}