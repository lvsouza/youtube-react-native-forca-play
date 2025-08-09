import { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

import { IMatch, StorageMatch } from '../../../shared/services/StorageMatch';
import { RoundListItem } from '../../../shared/components/RoundListItem';
import { Section } from '../../../shared/components/Section';
import { Card } from '../../../shared/components/Card';


export default function MatchDetail() {
  const { gameId } = useLocalSearchParams();


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
      <View className='gap-2 p-2 max-w-lg self-center w-full'>
        <Section
          title={
            <Text className='text-text font-base font-regular'>
              Modo clássico (
              {match.status === 'win' && (
                <Text className='font-bold text-correct'>Vitória</Text>
              )}
              {match.status === 'lose' && (
                <Text className='font-bold text-wrong'>Derrota</Text>
              )}
              {match.status === 'draw' && (
                <Text className='font-bold text-alert'>Empate</Text>
              )}
              )
            </Text>
          }
        >

          <View className='gap-2'>
            <View className='gap-2 flex-row'>
              <Card className='flex-1 aspect-square justify-center items-center gap-1'>
                <Text className='text-text text-center font-regular'>
                  Rodadas
                </Text>
                <Text className='text-text text-center font-bold text-lg'>
                  {match.numberOfRounds}
                </Text>
              </Card>
              <Card className='flex-1 aspect-square justify-center items-center gap-1'>
                <Text className='text-text text-center font-regular'>
                  Vitórias
                </Text>
                <Text className='text-text text-center font-bold text-lg'>
                  {match.rounds.filter(round => round.status === 'win').length}
                </Text>
              </Card>
              <Card className='flex-1 aspect-square justify-center items-center gap-1'>
                <Text className='text-text text-center font-regular'>
                  Derrotas
                </Text>
                <Text className='text-text text-center font-bold text-lg'>
                  {match.rounds.filter(round => round.status === 'lose').length}
                </Text>
              </Card>
            </View>

            <View className='gap-2 flex-row'>
              <Card className='flex-1 aspect-square justify-center items-center gap-1'>
                <Text className='text-text text-center font-regular'>
                  Dificuldade
                </Text>
                <Text className='text-text text-center font-bold text-lg'>
                  {match.wordDifficulty === 'easy' && 'Fácil'}
                  {match.wordDifficulty === 'medium' && 'Média'}
                  {match.wordDifficulty === 'hard' && 'Difícil'}
                </Text>
              </Card>
              <Card className='flex-1 aspect-square justify-center items-center gap-1'>
                <Text className='text-text text-center font-regular'>
                  Duração da rodada
                </Text>
                <Text className='text-text text-center font-bold text-lg'>
                  {match.timeForEachRound > 60 && (`${match.timeForEachRound / 60} horas`)}
                  {match.timeForEachRound === 60 && (`1 hora`)}
                  {match.timeForEachRound < 60 && (`${match.timeForEachRound} min.`)}
                </Text>
              </Card>
              <View className='flex-1 p-4 aspect-square' />
            </View>
          </View>
        </Section>

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
      </View>
    </ScrollView>
  );
}
