import { useEffect, useMemo, useState } from 'react';
import { Alert, Image, ScrollView, Text, useWindowDimensions, View } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

import { StorageMatchHistory } from '../../../shared/services/StorageMatchHistory';
import { Outlined } from '../../../shared/components/custom-buttons/Outlined';
import { IMatch, StorageMatch } from '../../../shared/services/StorageMatch';
import { Keyboard } from '../../../shared/components/match-ongoing/Keyboard';
import { ForcaImages } from '../../../shared/assets';


export default function MatchOngoing() {
  const { height, width } = useWindowDimensions();
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

        const currentRound = match.rounds.find(round => round.round === match.currentRound);
        if (currentRound?.status !== 'playing') {
          router.replace(`/matches/${match.id}/NewRound`);
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

  const handleGuessALetter = async (letter: string) => {
    if (!match?.id) return;

    const result = await StorageMatch.guessALetterByMatchId(match.id, letter);

    switch (result) {
      case 'match-not-found':
        router.back();
        break;
      case 'match-ended':
        router.replace(`/matches/${match.id}/MatchEnded`);
        break;
      case 'round-not-found':
      case 'round-ended':
      case 'round-time-expired':
        router.replace(`/matches/${match.id}/NewRound`);
        break;
      case 'letter-already-used':
        break;

      default:
        setMatch(oldMatch => {
          if (!oldMatch) return oldMatch;

          return {
            ...oldMatch,
            rounds: [
              ...oldMatch.rounds.filter(oldRound => oldRound.round !== result.round),
              result,
            ],
          };
        });
        break;
    }
  };


  if (!match || !currentRoundData) return (
    <View className='items-center justify-center flex-1'>
      <Text className='text-text font-regular text-lg'>
        Carregando...
      </Text>
    </View>
  );

  return (
    <ScrollView className='flex-1'>
      <View className='gap-6 items-center p-2 pt-6 pb-6 max-w-lg self-center w-full'>
        <Text className='text-text font-regular text-xl underline'>
          {currentRoundData.tip}
        </Text>

        <Image
          className='aspect-square'
          source={ForcaImages[(currentRoundData.wrongGuesses.length + 1) as 1]}
          style={{
            height: (width > 768 && height > 800) ? 300 : 240
          }}
        />

        <View className='flex-row flex-wrap gap-2 items-center justify-center sm:bg-white'>
          {currentRoundData.maskedWord.map((letter, index) => (
            <View key={index} className='border-b-4 border-text h-9 w-9'>
              <Text className='text-text font-bold text-2xl text-center uppercase'>
                {letter === '_' ? '' : letter}
              </Text>
            </View>
          ))}
        </View>

        <Keyboard
          disabled={desisting}
          onSelect={handleGuessALetter}
          wrongGuesses={currentRoundData.wrongGuesses}
          correctGuesses={currentRoundData.correctGuesses}
        />

        <Outlined
          color='error'
          disabled={desisting}
          onPress={handleDesist}
          text='Desistir da partida'
        />
      </View>
    </ScrollView>
  );
}
