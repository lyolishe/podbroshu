import { useRouter } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

const MyRidesScreen = () => {
  const { navigate } = useRouter();
  const openScreen = (...args: any[]) => {
    navigate("/add-trip");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Здесь будут места куда я везу</Text>
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
});

export default MyRidesScreen;
