import { Image, ScrollView, Text, View } from 'react-native';

import { Contained } from '../../../shared/components/custom-buttons/Contained';
import { Outlined } from '../../../shared/components/custom-buttons/Outlined';
import { RoundListItem } from '../../../shared/components/RoundListItem';
import { Section } from '../../../shared/components/Section';
import { Card } from '../../../shared/components/Card';
import { ForcaImages } from '../../../shared/assets';


export default function NewRound() {

  return (
    <ScrollView className='flex-1 p-2 pt-6'>
      <View className='gap-6'>

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
              status='win'
              word='Abacate'
              tip='Fruta com casca verde'
              wrongLetters={['e', 'i', 'o', 'u', 'g']}
              correctLetters={['a', 'b', 'c', 't', 'e']}
            />
          </Card>
        </Section>


        <View className='flex-row items-center justify-center gap-6'>
          <Outlined
            color='error'
            text='Desistir'
          />
          <Contained
            text='Começar'
          />
        </View>
      </View>
    </ScrollView>
  );
}
