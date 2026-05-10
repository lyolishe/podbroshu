import { useRouter } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";
import {useQuery} from "@tanstack/react-query";
import {getRidesQuery} from "@/api/webApi/queries/getRidesQuery";
import {Ride} from "@/components/Ride/Ride";

const MyRidesScreen = () => {
  const {data, isLoading} = useQuery(getRidesQuery)
  const { navigate } = useRouter();

  const openScreen = () => {
    navigate("/add-trip");
  };

  return (
    <View style={styles.container}>
      {isLoading && <Text style={styles.header}>Загружаем поездки...</Text>}
      {!isLoading && data && (
          <>
            <Text style={{...styles.header, ...styles.hasRides}}>Ваши поездки</Text>
            {data.map(ride => <Ride {...ride} key={ride.id}/>)}
          </>
      )}
      <Button title="Добавить поездку" onPress={openScreen} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 32,
    fontWeight: 800,
  },
  container: {
    flexDirection: "column",
    alignItems: "center",
    gap: 12,
  },
  hasRides: {
    marginBottom: 24
  }
});

export default MyRidesScreen;