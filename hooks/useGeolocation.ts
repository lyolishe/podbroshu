import { getCurrentLocation } from "@/api/geolocation/getCurrentLocation";
import { GeolocationResponse } from "@react-native-community/geolocation";
import { useEffect, useState } from "react";

export const useGeolocation = () => {
  const [location, setLocation] = useState<GeolocationResponse | undefined>(
    undefined,
  );

  useEffect(() => {
    getCurrentLocation().then(setLocation);
  }, []);

  return location;
};
