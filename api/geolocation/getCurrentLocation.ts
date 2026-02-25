import Geolocation, {
  GeolocationResponse,
} from "@react-native-community/geolocation";

export const getCurrentLocation = async (): Promise<GeolocationResponse> => {
  return new Promise((resolve, reject) =>
    Geolocation.getCurrentPosition(resolve, reject),
  );
};
