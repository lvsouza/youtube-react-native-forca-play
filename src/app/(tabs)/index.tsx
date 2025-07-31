import { useEffect, useMemo, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useRouter } from 'expo-router';

import { IMatchHistory, StorageMatchHistory } from '../../shared/services/StorageMatchHistory';
import { Contained } from '../../shared/components/custom-buttons/Contained';
import { MatchListItem } from '../../shared/components/home/MatchListItem';
import { Section } from '../../shared/components/Section';
import { Card } from '../../shared/components/Card';


export default function Index() {
  const router = useRouter();


  const [matches, setMatches] = useState<IMatchHistory[]>([]);


  useEffect(() => {
    StorageMatchHistory
      .getAll()
      .then(matches => {
        setMatches(matches)
      })
  }, []);


  const matchesEnded = useMemo(() => {
    return matches.filter(match => match.status !== 'ongoing');
  }, [matches]);


  return (
    <ScrollView>
      <View className='flex-1 px-2 gap-6'>
        <View className='items-center'>
          <Contained
            text='Nova partida'
            onPress={() => router.push('/matches/NewMatch')}
          />
        </View>


        <Section title="Partidas em andamento">
          <Card>
            {matches.map((match) => (
              <MatchListItem
                mode={match.mode}
                currentRound={2}
                status={match.status}
                numberOfRounds={match.numberOfRounds}
                onPress={() => router.push(`/matches/${match.id}/MatchOngoing`)}
              />
            ))}
            {matches.length === 0 && (
              <View className='p-2 gap-6'>
                <Text className='text-text font-bold text-lg text-center opacity-50'>
                  Nenhum histórico ainda...
                </Text>
              </View>
            )}
          </Card>
        </Section>

        <Section title="Histórico de partidas">
          <Card>
            {matchesEnded.map((match) => (
              <MatchListItem
                mode={match.mode}
                status={match.status}
                numberOfRounds={match.numberOfRounds}
                onPress={() => router.push(`/matches/${match.id}/MatchDetail`)}
              />
            ))}
            {matchesEnded.length === 0 && (
              <View className='p-2 gap-6'>
                <Text className='text-text font-bold text-lg text-center opacity-50'>
                  Nenhum histórico ainda...
                </Text>
              </View>
            )}
          </Card>
        </Section>

      </View>
    </ScrollView>
  );
}
