import { Stack } from "expo-router";
import { HeaderBackButton } from '@react-navigation/elements';

export default function RootLayout() {
  return (
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
  );
}
