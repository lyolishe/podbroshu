import Geolocation from "@react-native-community/geolocation";

export const requestGeolocationAccess = () => {
  return Geolocation.requestAuthorization(() => {
    console.log("success");
  });
};
