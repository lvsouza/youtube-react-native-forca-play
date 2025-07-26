import { useEffect } from 'react';
import { SplashScreen, Stack } from 'expo-router';
import { useFonts } from 'expo-font';

import { theme } from '../shared/themes/Theme';
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
    <Stack
      screenOptions={{
        headerTintColor: theme.colors.text,
        contentStyle: {
          backgroundColor: theme.colors.background,
        },
        headerStyle: {
          backgroundColor: theme.colors.paper,
        },
        headerTitleStyle: {
          color: theme.colors.text,
          fontFamily: theme.fonts.family.bold,
        },
      }}
    >
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
