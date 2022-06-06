import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    screenHeading: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },  
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    listItem: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        marginVertical: 10,
        marginHorizontal: 20,
        borderWidth: 1,
        borderColor: 'black',
    },
    itemInfo: {
        width: '60%',
    },
    itemHeading: {
        fontSize: 30,
        marginBottom: 5,
    },
    itemLocation: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemCoords: {
        fontSize: 18,
    },
    itemButtons: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    itemButton: {
        backgroundColor: '#DC143C',
        marginHorizontal: 5,
        padding: 5,
        borderRadius: 100,
    }
});