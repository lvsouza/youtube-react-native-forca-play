import { Tabs } from 'expo-router';
import { theme } from '../../shared/themes/Theme';


export default function Layout() {

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.colors.paper,
        },
        sceneStyle: {
          backgroundColor: theme.colors.background,
        },
      }}
    />
  );
}
