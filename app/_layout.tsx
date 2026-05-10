import { Stack } from "expo-router";
import { HeaderBackButton } from '@react-navigation/elements';
import {QueryClientProvider} from "@tanstack/react-query";
import {queryClient} from "@/api/webApi";

export default function RootLayout() {
  return (
      <QueryClientProvider client={queryClient}>
          <Stack>
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              <Stack.Screen name="add-trip" options={({ navigation }) => ({
                  headerTitle: "Куда едем?",
                  headerLeft: (props) => {
                      return (
                          <HeaderBackButton
                              {...props}
                              onPress={() => {
                                  if (navigation.canGoBack()) {
                                      navigation.goBack()
                                  } else {
                                      navigation.navigate('index')
                                  }
                              }}
                          />
                      )
                  }
              })} />
          </Stack>
      </QueryClientProvider>
  );
}
