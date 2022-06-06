import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, FlatList, Button } from 'react-native';
import { styles } from './Stylesheet';

export function ListScreen({ navigation, route }) {
    const [gyms, setGyms] = useState([]);
    const { listOfGyms } = route.params;

    // const GetGymsFromWebservice = () => {
    //     fetch('https://stud.hosted.hr.nl/1006859/webservice/gymList.json')
    //     .then((res) => res.json())
    //     .then((data) => {
    //         setGyms(data['ex-raid-gyms']);
    //     })
    //     .catch((e) => console.log(e))
    // }
    
    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text>{item.name}</Text>
            <Text>Latitude {item.lat}; Longitude {item.long}</Text>
            <Button 
                title="See this gym on the map"
                onPress={ () => {navigation.navigate("Map", { latlng: {"lat": item.lat, "long": item.long } })} }
            />
        </View>
    );

    console.log(`List of EX RAID GYMS 1: \n ${listOfGyms}`)


    return (
        <SafeAreaView style={styles.container}>
            <Text>itemId: {JSON.stringify(listOfGyms)}</Text>
            {/* <FlatList 
                data={gyms}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            /> */}
        </SafeAreaView >
    );
}