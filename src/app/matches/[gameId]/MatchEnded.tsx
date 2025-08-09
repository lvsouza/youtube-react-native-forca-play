import { useEffect, useState } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ScrollView, Text, View } from 'react-native';

import { Contained } from '../../../shared/components/custom-buttons/Contained';
import { Outlined } from '../../../shared/components/custom-buttons/Outlined';
import { IMatch, StorageMatch } from '../../../shared/services/StorageMatch';
import { RoundListItem } from '../../../shared/components/RoundListItem';
import { Section } from '../../../shared/components/Section';
import { Card } from '../../../shared/components/Card';


export default function MatchEnded() {
  const { gameId } = useLocalSearchParams();
  const router = useRouter();

  const [match, setMatch] = useState<IMatch>();


  useEffect(() => {
    if (!gameId || Array.isArray(gameId)) return;

    StorageMatch
      .getById(gameId)
      .then(match => {
        if (!match) return;
        setMatch(match);
      });
  }, [gameId]);


  if (!match) return (
    <View className='items-center justify-center flex-1'>
      <Text className='text-text font-regular text-lg'>
        Carregando...
      </Text>
    </View>
  );


  return (
    <ScrollView className='flex-1'>
      <View className='gap-6 p-2 pt-6 pb-6 max-w-lg self-center w-full'>

        {match.status === 'win' && (
          <Text className='text-correct font-bold text-lg text-center'>
            Vitória
          </Text>
        )}
        {match.status === 'lose' && (
          <Text className='text-wrong font-bold text-lg text-center'>
            Derrota
          </Text>
        )}
        {match.status === 'draw' && (
          <Text className='text-alert font-bold text-lg text-center'>
            Empate
          </Text>
        )}

        {match.status === 'win' && (
          <Text className='text-text font-italic text-base text-center'>
            Uhul! Você escapou da forca e mostrou que é um mestre das palavras!
          </Text>
        )}
        {match.status === 'lose' && (
          <Text className='text-text font-italic text-base text-center'>
            Que pena... A forca te pegou dessa vez! Mas não desista, tente novamente!
          </Text>
        )}
        {match.status === 'draw' && (
          <Text className='text-text font-italic text-base text-center'>
            Hmm, nem quem ganhar ou perder, vai ganhar ou perder... Tente novamente!
          </Text>
        )}


        <Section title='Rodadas'>
          <Card>
            {match.rounds.map((round, index) => (
              <RoundListItem
                tip={round.tip}
                key={round.round}
                divider={index > 0}
                status={round.status}
                word={round.maskedWord.join(' ')}
                wrongLetters={round.wrongGuesses}
                correctLetters={round.correctGuesses}
              />
            ))}
          </Card>
        </Section>


        <View className='flex-row items-center justify-center gap-6'>
          <Outlined
            text='Voltar'
            onPress={() => router.back()}
          />
          <Contained
            text='Nova partida'
            onPress={() => router.replace('/matches/NewMatch')}
          />
        </View>

      </View>
    </ScrollView>
  );
}
