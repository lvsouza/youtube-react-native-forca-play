import { useEffect, useRef } from 'react';
import mobileAds, { AdsConsent } from 'react-native-google-mobile-ads';
import { SplashScreen, Stack } from 'expo-router';
import { useFonts } from 'expo-font';

import { theme } from '../shared/themes/Theme';
import "./../global.css";


SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const initializedAds = useRef(false);


  const [loaded] = useFonts({
    PoppinsRegular: require('./../../assets/fonts/Poppins/Poppins-Regular.ttf'),
    PoppinsItalic: require('./../../assets/fonts/Poppins/Poppins-Italic.ttf'),
    PoppinsBold: require('./../../assets/fonts/Poppins/Poppins-Bold.ttf'),
  });


  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  useEffect(() => {
    async function init() {
      try {
        await AdsConsent.gatherConsent();
        const { canRequestAds } = await AdsConsent.getConsentInfo();

        if (canRequestAds && !initializedAds.current) {
          await mobileAds().initialize();
          initializedAds.current = true;
        }
      } catch (error) {
        console.log(error);

        if (!initializedAds.current) {
          await mobileAds().initialize();
          initializedAds.current = true;
        }
      }
    }

    init();
  }, []);


  if (!loaded) return null;

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: theme.colors.background,
        },
      }}
    >
      <Stack.Screen name='(tabs)' />
      <Stack.Screen name='matches' />
    </Stack>
  );
}
