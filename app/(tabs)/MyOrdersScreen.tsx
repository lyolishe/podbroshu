import { useGeolocation } from "@/hooks/useGeolocation";
import { Text, View } from "react-native";

const MyOrdersScreen = () => {
  const location = useGeolocation();
  return (
    <View>
      <Text>Здесь будут места, куда меня надо подкинуть</Text>
      {location && (
        <Text>
          Текущая локация:{" "}
          <Text>
            {location.coords.latitude.toFixed(5)} -{" "}
            {location.coords.longitude.toFixed(5)}
          </Text>
        </Text>
      )}
    </View>
  );
};

export default MyOrdersScreen;
