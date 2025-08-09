import { useEffect, useMemo, useState } from 'react';
import { Alert, Image, ScrollView, Text, View } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

import { StorageMatchHistory } from '../../../shared/services/StorageMatchHistory';
import { Contained } from '../../../shared/components/custom-buttons/Contained';
import { Outlined } from '../../../shared/components/custom-buttons/Outlined';
import { IMatch, StorageMatch } from '../../../shared/services/StorageMatch';
import { RoundListItem } from '../../../shared/components/RoundListItem';
import { Section } from '../../../shared/components/Section';
import { Card } from '../../../shared/components/Card';
import { ForcaImages } from '../../../shared/assets';


export default function NewRound() {
  const { gameId } = useLocalSearchParams();
  const router = useRouter();


  const [desisting, setDesisting] = useState(false);
  const [match, setMatch] = useState<IMatch>();


  useEffect(() => {
    if (!gameId || Array.isArray(gameId)) return;

    StorageMatch
      .getById(gameId)
      .then(match => {
        if (!match) return;

        if (match.status !== 'ongoing') {
          router.replace(`/matches/${match.id}/MatchEnded`);
          return;
        }

        setMatch(match);
      });
  }, [gameId]);


  const currentRoundData = useMemo(() => {
    return match?.rounds.find(round => round.round === match.currentRound);
  }, [match?.currentRound, match?.rounds]);


  const handleDesist = () => {
    if (!match) return;

    const doDesist = async () => {
      setDesisting(true);

      await StorageMatch.update({ ...match, status: 'lose' });
      await StorageMatchHistory.update({
        id: match.id,
        status: 'lose',
        mode: match.mode,
        numberOfRounds: match.numberOfRounds,
      });

      setDesisting(false);

      router.replace(`/matches/${match.id}/MatchEnded`);
    }

    Alert.alert(
      'Desistir da partida?',
      'Se desistir o status da partida ficará como "Derrota". Continuar?',
      [
        { text: 'Cancelar', isPreferred: true, style: 'cancel' },
        { text: 'Desistir agora', onPress: doDesist, style: 'destructive' },
      ],
    );
  }

  const handleNewRound = async () => {
    if (!gameId || Array.isArray(gameId)) return;

    await StorageMatch.addRoundByMatchId(gameId);
    router.replace(`/matches/${gameId}/MatchOngoing`);
  }


  if (!match || !currentRoundData) return (
    <View className='items-center justify-center flex-1'>
      <Text className='text-text font-regular text-lg'>
        Carregando...
      </Text>
    </View>
  );

  return (
    <ScrollView className='flex-1'>
      <View className='gap-6 p-2 pt-6 pb-6 max-w-lg self-center w-full'>

        <Text className='font-bold text-lg text-text text-center'>
          Vamos para a próxima rodada?
        </Text>

        <Image
          source={ForcaImages[1]}
          className='w-60 h-60 self-center'
        />

        <Section title="Última rodada">
          <Card>
            <RoundListItem
              tip={currentRoundData.tip}
              key={currentRoundData.round}
              status={currentRoundData.status}
              word={currentRoundData.maskedWord.join(' ')}
              wrongLetters={currentRoundData.wrongGuesses}
              correctLetters={currentRoundData.correctGuesses}
            />
          </Card>
        </Section>


        <View className='flex-row items-center justify-center gap-6'>
          <Outlined
            color='error'
            disabled={desisting}
            onPress={handleDesist}
            text={desisting ? 'Aguarde...' : 'Desistir'}
          />
          <Contained
            text='Começar'
            disabled={desisting}
            onPress={handleNewRound}
          />
        </View>
      </View>
    </ScrollView>
  );
}
