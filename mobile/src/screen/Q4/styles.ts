import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f0f0f0',
    },
    input: {
        width: '100%',
        height: 60,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        fontSize: 24,
        textAlign: 'right',
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    buttonRow: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ddd',
        padding: 20,
        margin: 5,
        borderRadius: 10,
    },
    operatorButton: {
        backgroundColor: '#f0a000',
    },
    clearButton: {
        backgroundColor: '#e04040',
    },
    buttonText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    result: {
        marginTop: 20,
        fontSize: 30,
        fontWeight: 'bold',
        color: '#333',
    },
});