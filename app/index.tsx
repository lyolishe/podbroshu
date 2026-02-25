import { requestGeolocationAccess } from "@/api/geolocation/requestGeolocationAccess";
import { Redirect } from "expo-router";
import { useEffect } from "react";
import { Platform } from "react-native";

const IndexRoute = () => {
  useEffect(() => {
    if (Platform.OS !== "web") requestGeolocationAccess();
  }, []);
  return <Redirect href="/MyRidesScreen" />;
};

export default IndexRoute;
