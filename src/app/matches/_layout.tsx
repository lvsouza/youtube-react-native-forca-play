import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';

import { CustomHeader } from '../../shared/components/CustomHeader';



export default function Layout() {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        marginBottom: insets.bottom,
        marginLeft: insets.left,
        marginRight: insets.right,
      }}
    >
      <Stack
        screenOptions={{
          header: CustomHeader,
          contentStyle: { backgroundColor: 'transparent' }
        }}
      >
        <Stack.Screen
          name='NewMatch'
          options={{ title: 'Nova partida' }}
        />

        <Stack.Screen
          name='[gameId]/MatchDetail'
          options={{ title: 'Detalhes' }}
        />
        <Stack.Screen
          name='[gameId]/MatchOngoing'
          options={{ title: 'Partida em andamento' }}
        />
        <Stack.Screen
          name='[gameId]/NewRound'
          options={{ title: 'Nova rodada' }}
        />
        <Stack.Screen
          name='[gameId]/MatchEnded'
          options={{ title: 'Partida encerrada' }}
        />
      </Stack>
    </View>
  );
}

