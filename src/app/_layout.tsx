import { useEffect } from 'react';
import { SplashScreen, Stack } from 'expo-router';
import { useFonts } from 'expo-font';

import "./../global.css";


SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    PoppinsRegular: require('./../../assets/fonts/Poppins/Poppins-Regular.ttf'),
    PoppinsBold: require('./../../assets/fonts/Poppins/Poppins-Bold.ttf'),
  });


  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);


  if (!loaded) return null;

  return (
    <Stack>
      <Stack.Screen
        name='(tabs)'
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name='matches/MatchDetail'
        options={{ title: 'Detalhes' }}
      />
    </Stack>
  );
}
