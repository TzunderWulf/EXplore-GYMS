import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    item: {
        borderWidth: 1,
        padding: 20,
        marginVertical: 10,
        marginHorizontal: 30,
        borderColor: 'black',
    }
});