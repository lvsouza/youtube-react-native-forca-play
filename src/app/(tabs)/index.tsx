import { useCallback, useEffect, useMemo, useState } from 'react';
import { useFocusEffect, useRouter } from 'expo-router';
import { ScrollView, Text, View } from 'react-native';

import { IMatchHistory, StorageMatchHistory } from '../../shared/services/StorageMatchHistory';
import { Contained } from '../../shared/components/custom-buttons/Contained';
import { MatchListItem } from '../../shared/components/home/MatchListItem';
import { IMatch, StorageMatch } from '../../shared/services/StorageMatch';
import { Section } from '../../shared/components/Section';
import { Card } from '../../shared/components/Card';


export default function Index() {
  const router = useRouter();


  const [matchesOngoing, setMatchesOngoing] = useState<(IMatchHistory & IMatch)[]>([]);
  const [matchesEnded, setMatchesEnded] = useState<IMatchHistory[]>([]);


  useFocusEffect(
    useCallback(() => {
      StorageMatchHistory
        .getAll()
        .then(async matches => {
          const matchesEnded = matches.filter(match => match.status !== 'ongoing');
          setMatchesEnded(matchesEnded);

          const matchesOngoing = matches.filter(match => match.status === 'ongoing');
          const fullMatchesOngoing = await Promise
            .all(
              matchesOngoing.map(async (match) => {
                const fullMatch = await StorageMatch.getById(match.id);
                if (!fullMatch) return;

                return {
                  ...match,
                  ...fullMatch,
                };
              })
            )
            .then(matches => matches.filter(Boolean));

          setMatchesOngoing(fullMatchesOngoing as (IMatchHistory & IMatch)[])
        })
    }, [])
  );


  return (
    <ScrollView>
      <View className='flex-1 pt-6 pb-6 p-2 gap-6 max-w-lg self-center w-full'>
        <View className='items-center'>
          <Contained
            text='Nova partida'
            disabled={matchesOngoing.length > 0}
            onPress={() => router.push('/matches/NewMatch')}
          />
        </View>


        <Section title="Partidas em andamento">
          <Card>
            {matchesOngoing.map((match) => (
              <MatchListItem
                key={match.id}
                mode={match.mode}
                status={match.status}
                currentRound={match.currentRound}
                numberOfRounds={match.numberOfRounds}
                onPress={() => router.push(`/matches/${match.id}/MatchOngoing`)}
              />
            ))}
            {matchesOngoing.length === 0 && (
              <View className='p-2 gap-6'>
                <Text className='text-text font-bold text-lg text-center opacity-50'>
                  Nenhuma partida em andamento...
                </Text>
              </View>
            )}
          </Card>
        </Section>

        <Section title="Histórico de partidas">
          <Card>
            {matchesEnded.map((match) => (
              <MatchListItem
                key={match.id}
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
