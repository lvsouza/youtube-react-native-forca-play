import { useRouter } from 'expo-router';
import { ScrollView, View } from 'react-native';

import { Contained } from '../../shared/components/custom-buttons/Contained';
import { MatchListItem } from '../../shared/components/home/MatchListItem';
import { Section } from '../../shared/components/Section';
import { Card } from '../../shared/components/Card';


export default function Index() {
  const router = useRouter();

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
            <MatchListItem
              mode='classic'
              currentRound={2}
              status='ongoing'
              numberOfRounds={3}
              onPress={() => router.push('/matches/123/MatchOngoing')}
            />
          </Card>
        </Section>

        <Section title="Histórico de partidas">
          <Card>
            <MatchListItem
              status='lose'
              mode='classic'
              currentRound={2}
              numberOfRounds={3}
              onPress={() => router.push('/matches/123/MatchDetail')}
            />
            <MatchListItem
              divider
              status='win'
              mode='classic'
              currentRound={2}
              numberOfRounds={3}
              onPress={() => router.push('/matches/123/MatchDetail')}
            />
            <MatchListItem
              divider
              status='lose'
              mode='classic'
              currentRound={2}
              numberOfRounds={3}
              onPress={() => router.push('/matches/123/MatchDetail')}
            />
            <MatchListItem
              divider
              status='draw'
              mode='classic'
              currentRound={2}
              numberOfRounds={3}
              onPress={() => router.push('/matches/123/MatchDetail')}
            />
            <MatchListItem
              status='lose'
              mode='classic'
              currentRound={2}
              numberOfRounds={3}
              onPress={() => router.push('/matches/123/MatchDetail')}
            />
            <MatchListItem
              divider
              status='win'
              mode='classic'
              currentRound={2}
              numberOfRounds={3}
              onPress={() => router.push('/matches/123/MatchDetail')}
            />
            <MatchListItem
              divider
              status='lose'
              mode='classic'
              currentRound={2}
              numberOfRounds={3}
              onPress={() => router.push('/matches/123/MatchDetail')}
            />
            <MatchListItem
              divider
              status='draw'
              mode='classic'
              currentRound={2}
              numberOfRounds={3}
              onPress={() => router.push('/matches/123/MatchDetail')}
            />
            <MatchListItem
              status='lose'
              mode='classic'
              currentRound={2}
              numberOfRounds={3}
              onPress={() => router.push('/matches/123/MatchDetail')}
            />
            <MatchListItem
              divider
              status='win'
              mode='classic'
              currentRound={2}
              numberOfRounds={3}
              onPress={() => router.push('/matches/123/MatchDetail')}
            />
            <MatchListItem
              divider
              status='lose'
              mode='classic'
              currentRound={2}
              numberOfRounds={3}
              onPress={() => router.push('/matches/123/MatchDetail')}
            />
            <MatchListItem
              divider
              status='draw'
              mode='classic'
              currentRound={2}
              numberOfRounds={3}
              onPress={() => router.push('/matches/123/MatchDetail')}
            />
            <MatchListItem
              status='lose'
              mode='classic'
              currentRound={2}
              numberOfRounds={3}
              onPress={() => router.push('/matches/123/MatchDetail')}
            />
            <MatchListItem
              divider
              status='win'
              mode='classic'
              currentRound={2}
              numberOfRounds={3}
              onPress={() => router.push('/matches/123/MatchDetail')}
            />
            <MatchListItem
              divider
              status='lose'
              mode='classic'
              currentRound={2}
              numberOfRounds={3}
              onPress={() => router.push('/matches/123/MatchDetail')}
            />
            <MatchListItem
              divider
              status='draw'
              mode='classic'
              currentRound={2}
              numberOfRounds={3}
              onPress={() => router.push('/matches/123/MatchDetail')}
            />
            <MatchListItem
              status='lose'
              mode='classic'
              currentRound={2}
              numberOfRounds={3}
              onPress={() => router.push('/matches/123/MatchDetail')}
            />
            <MatchListItem
              divider
              status='win'
              mode='classic'
              currentRound={2}
              numberOfRounds={3}
              onPress={() => router.push('/matches/123/MatchDetail')}
            />
            <MatchListItem
              divider
              status='lose'
              mode='classic'
              currentRound={2}
              numberOfRounds={3}
              onPress={() => router.push('/matches/123/MatchDetail')}
            />
            <MatchListItem
              divider
              status='draw'
              mode='classic'
              currentRound={2}
              numberOfRounds={3}
              onPress={() => router.push('/matches/123/MatchDetail')}
            />
            <MatchListItem
              status='lose'
              mode='classic'
              currentRound={2}
              numberOfRounds={3}
              onPress={() => router.push('/matches/123/MatchDetail')}
            />
            <MatchListItem
              divider
              status='win'
              mode='classic'
              currentRound={2}
              numberOfRounds={3}
              onPress={() => router.push('/matches/123/MatchDetail')}
            />
            <MatchListItem
              divider
              status='lose'
              mode='classic'
              currentRound={2}
              numberOfRounds={3}
              onPress={() => router.push('/matches/123/MatchDetail')}
            />
            <MatchListItem
              divider
              status='draw'
              mode='classic'
              currentRound={2}
              numberOfRounds={3}
              onPress={() => router.push('/matches/123/MatchDetail')}
            />
            <MatchListItem
              status='lose'
              mode='classic'
              currentRound={2}
              numberOfRounds={3}
              onPress={() => router.push('/matches/123/MatchDetail')}
            />
            <MatchListItem
              divider
              status='win'
              mode='classic'
              currentRound={2}
              numberOfRounds={3}
              onPress={() => router.push('/matches/123/MatchDetail')}
            />
            <MatchListItem
              divider
              status='lose'
              mode='classic'
              currentRound={2}
              numberOfRounds={3}
              onPress={() => router.push('/matches/123/MatchDetail')}
            />
            <MatchListItem
              divider
              status='draw'
              mode='classic'
              currentRound={2}
              numberOfRounds={3}
              onPress={() => router.push('/matches/123/MatchDetail')}
            />
            <MatchListItem
              status='lose'
              mode='classic'
              currentRound={2}
              numberOfRounds={3}
              onPress={() => router.push('/matches/123/MatchDetail')}
            />
            <MatchListItem
              divider
              status='win'
              mode='classic'
              currentRound={2}
              numberOfRounds={3}
              onPress={() => router.push('/matches/123/MatchDetail')}
            />
            <MatchListItem
              divider
              status='lose'
              mode='classic'
              currentRound={2}
              numberOfRounds={3}
              onPress={() => router.push('/matches/123/MatchDetail')}
            />
            <MatchListItem
              divider
              status='draw'
              mode='classic'
              currentRound={2}
              numberOfRounds={3}
              onPress={() => router.push('/matches/123/MatchDetail')}
            />
            <MatchListItem
              status='lose'
              mode='classic'
              currentRound={2}
              numberOfRounds={3}
              onPress={() => router.push('/matches/123/MatchDetail')}
            />
            <MatchListItem
              divider
              status='win'
              mode='classic'
              currentRound={2}
              numberOfRounds={3}
              onPress={() => router.push('/matches/123/MatchDetail')}
            />
            <MatchListItem
              divider
              status='lose'
              mode='classic'
              currentRound={2}
              numberOfRounds={3}
              onPress={() => router.push('/matches/123/MatchDetail')}
            />
            <MatchListItem
              divider
              status='draw'
              mode='classic'
              currentRound={2}
              numberOfRounds={3}
              onPress={() => router.push('/matches/123/MatchDetail')}
            />
            <MatchListItem
              status='lose'
              mode='classic'
              currentRound={2}
              numberOfRounds={3}
              onPress={() => router.push('/matches/123/MatchDetail')}
            />
            <MatchListItem
              divider
              status='win'
              mode='classic'
              currentRound={2}
              numberOfRounds={3}
              onPress={() => router.push('/matches/123/MatchDetail')}
            />
            <MatchListItem
              divider
              status='lose'
              mode='classic'
              currentRound={2}
              numberOfRounds={3}
              onPress={() => router.push('/matches/123/MatchDetail')}
            />
            <MatchListItem
              divider
              status='draw'
              mode='classic'
              currentRound={2}
              numberOfRounds={3}
              onPress={() => router.push('/matches/123/MatchDetail')}
            />
            <MatchListItem
              status='lose'
              mode='classic'
              currentRound={2}
              numberOfRounds={3}
              onPress={() => router.push('/matches/123/MatchDetail')}
            />
            <MatchListItem
              divider
              status='win'
              mode='classic'
              currentRound={2}
              numberOfRounds={3}
              onPress={() => router.push('/matches/123/MatchDetail')}
            />
            <MatchListItem
              divider
              status='lose'
              mode='classic'
              currentRound={2}
              numberOfRounds={3}
              onPress={() => router.push('/matches/123/MatchDetail')}
            />
            <MatchListItem
              divider
              status='draw'
              mode='classic'
              currentRound={2}
              numberOfRounds={3}
              onPress={() => router.push('/matches/123/MatchDetail')}
            />
            <MatchListItem
              status='lose'
              mode='classic'
              currentRound={2}
              numberOfRounds={3}
              onPress={() => router.push('/matches/123/MatchDetail')}
            />
            <MatchListItem
              divider
              status='win'
              mode='classic'
              currentRound={2}
              numberOfRounds={3}
              onPress={() => router.push('/matches/123/MatchDetail')}
            />
            <MatchListItem
              divider
              status='lose'
              mode='classic'
              currentRound={2}
              numberOfRounds={3}
              onPress={() => router.push('/matches/123/MatchDetail')}
            />
            <MatchListItem
              divider
              status='draw'
              mode='classic'
              currentRound={2}
              numberOfRounds={3}
              onPress={() => router.push('/matches/123/MatchDetail')}
            />
            <MatchListItem
              status='lose'
              mode='classic'
              currentRound={2}
              numberOfRounds={3}
              onPress={() => router.push('/matches/123/MatchDetail')}
            />
            <MatchListItem
              divider
              status='win'
              mode='classic'
              currentRound={2}
              numberOfRounds={3}
              onPress={() => router.push('/matches/123/MatchDetail')}
            />
            <MatchListItem
              divider
              status='lose'
              mode='classic'
              currentRound={2}
              numberOfRounds={3}
              onPress={() => router.push('/matches/123/MatchDetail')}
            />
            <MatchListItem
              divider
              status='draw'
              mode='classic'
              currentRound={2}
              numberOfRounds={3}
              onPress={() => router.push('/matches/123/MatchDetail')}
            />
          </Card>
        </Section>

      </View>
    </ScrollView>
  );
}
