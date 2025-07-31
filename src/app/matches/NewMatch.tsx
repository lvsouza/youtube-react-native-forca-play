import { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import * as Crypto from 'expo-crypto';

import { StorageMatchHistory } from '../../shared/services/StorageMatchHistory';
import { Contained } from '../../shared/components/custom-buttons/Contained';
import { Outlined } from '../../shared/components/custom-buttons/Outlined';
import { Select } from '../../shared/components/new-match/Select';
import { StorageMatch } from '../../shared/services/StorageMatch';


export default function NewMatch() {
  const router = useRouter()

  const [difficulty, setDifficulty] = useState<"medium" | "easy" | "hard">('medium');
  const [timeForEachRound, setTimeForEachRound] = useState(3);
  const [numberOfRounds, setNumberOfROunds] = useState(3);
  const [isLoading, setIsLoading] = useState(false);


  const handleBack = () => {
    router.dismissAll();
  }

  StorageMatchHistory.getAll().then(console.log)

  const handleCreateMatch = async () => {
    setIsLoading(true);

    const matchId = await StorageMatchHistory.create({
      numberOfRounds,
      mode: 'classic',
      status: 'ongoing',
    });

    await StorageMatch.create({
      id: matchId,
      numberOfRounds,
      mode: 'classic',
      currentRound: 1,
      timeForEachRound,
      status: 'ongoing',
      wordDifficulty: difficulty,
      rounds: [],
    });

    await StorageMatch.addRoundByMatchId(matchId);

    setIsLoading(false);

    router.replace(`/matches/${matchId}/MatchOngoing`);
  }


  return (
    <ScrollView className='flex-1 p-2'>
      <View className='gap-6 pt-6'>

        <Text className='text-text font-regular text-base text-center'>
          Modo clássico offline
        </Text>

        <View className='gap-4'>
          <Select
            value={difficulty}
            label='Dificuldade'
            disabled={isLoading}
            onGetItemLabel={(item) => item?.name || ''}
            onSelect={(selectedItem) => setDifficulty(selectedItem.id)}
            onGetSelected={(selectedValue, item) => item.id === selectedValue}
            data={[
              { id: 'easy', name: 'Fácil' },
              { id: 'medium', name: 'Média' },
              { id: 'hard', name: 'Difícil' },
            ]}
          />
          <Select
            disabled={isLoading}
            label='Número de rodadas'
            value={numberOfRounds}
            onGetItemLabel={(item) => item?.name || ''}
            onSelect={(selectedItem) => setNumberOfROunds(selectedItem.id)}
            onGetSelected={(selectedValue, item) => item.id === selectedValue}
            data={[
              { id: 1, name: '1 rodada' },
              { id: 3, name: '3 rodadas' },
              { id: 5, name: '5 rodadas' },
              { id: 10, name: '10 rodadas' },
              { id: 20, name: '20 rodadas' },
            ]}
          />
          <Select
            disabled={isLoading}
            label='Tempo por rodada'
            value={timeForEachRound}
            onGetItemLabel={(item) => item?.name || ''}
            onSelect={(selectedItem) => setTimeForEachRound(selectedItem.id)}
            onGetSelected={(selectedValue, item) => item.id === selectedValue}
            data={[
              { id: 3, name: '3 minutos' },
              { id: 5, name: '5 minutos' },
              { id: 15, name: '15 minutos' },
              { id: 30, name: '30 minutos' },
              { id: 60, name: '1 hora' },
            ]}
          />
        </View>

        <View className='flex-row gap-6 items-center justify-center'>
          <Outlined
            text='Voltar'
            disabled={isLoading}
            onPress={handleBack}
          />
          <Contained
            disabled={isLoading}
            onPress={handleCreateMatch}
            text={isLoading ? 'Aguarde...' : 'Começar'}
          />
        </View>
      </View>
    </ScrollView>
  );
}
