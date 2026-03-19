import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const AddTripModal = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Куда едем?</Text>
        <Link href={"/"} dismissTo>
          X
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default AddTripModal;
