import { StyleSheet } from "react-native";


export default StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: "row"
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    inner_container: {
        padding: 10,
        flex: 1,
        justifyContent: "center"
    },
    title: {
        fontWeight: "bold",
        fontSize: 23
    },
    info_container: {
        flexDirection: "row",
        flex: 1,
        alignItems: "center"
    },
    year: {
        fontSize: 11,
        marginLeft: 10,
        color: "gray",
        fontWeight: "bold"
    },
    soldOut_container: {
        borderWidth: 1,
        borderColor: "red",
        padding: 5,
        borderRadius: 5
    },
    soldOut_title: {
        color: "red",
        fontSize: 11
    },
    content_container: {
        flexDirection: "row"
    }
})