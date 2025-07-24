import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Text, View } from 'react-native';


SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded] = useFonts({
    PoppinsRegular: require('./assets/fonts/Poppins/Poppins-Regular.ttf'),
    PoppinsBold: require('./assets/fonts/Poppins/Poppins-Bold.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);


  if (!loaded) return null;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontFamily: 'PoppinsBold' }}>Hello world</Text>
    </View>
  );
}
