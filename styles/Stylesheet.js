import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: '15%',
        paddingHorizontal: 30,
    },
    centerContainer: {
        padding: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    map: {
        width: Dimensions.get('window').height,
        height: Dimensions.get('window').height,
    },
    settingsOption: {
        flexDirection: 'row'
    },
    heading: {
        fontSize: 35,
        paddingBottom: 10,
        marginBottom: 20,
        fontWeight: 'bold',
        borderBottomWidth: 1,
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    buttonText: {
        marginEnd: 20,
    },
    item: {
        flex: 1,
        padding: 10,
        marginBottom: 20,
        borderBottomWidth: 1,
    },
    itemInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    itemSubtitle: {
        fontStyle: 'italic',
        fontSize: 16,
    },
    itemButtons: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 15,
    },
    modal: {
        backgroundColor: "white",
        borderRadius: 20,
        alignItems: "center",
        shadowColor: "#000",
        marginHorizontal: 20,
        marginTop: 50,
        paddingVertical: 30,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 3,
    },
});