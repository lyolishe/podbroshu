import {RideDto} from "@/api/webApi/api.dto";
import {StyleSheet, Text, View} from "react-native";

export const Ride = (ride: RideDto) => {
    return (
        <View style={styles.root}>
            <Text style={styles.directions}>{ride.from} {'->'} {ride.To}</Text>
            <Text style={styles.dateTime}>Когда: {ride.date} {ride.time}</Text>
            <Text style={styles.passengers}>Возьму пассажиров: {ride.passenger_n}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        alignItems:"flex-start",
        justifyContent: "space-around",
        height: 100
    },
    directions: {
        fontSize:24,
        fontWeight: 600,
    },
    dateTime: {
        fontSize:16,
    },
    passengers: {
        fontSize:12,
        color: 'gray'
    }
})