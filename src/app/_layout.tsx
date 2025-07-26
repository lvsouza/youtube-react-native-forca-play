import { useEffect } from 'react';
import { Slot, SplashScreen } from 'expo-router';
import { useFonts } from 'expo-font';


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
    <Slot />
  );
}
