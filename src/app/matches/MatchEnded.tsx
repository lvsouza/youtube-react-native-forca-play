import { ScrollView, Text, View } from 'react-native';
import { Section } from '../../shared/components/Section';
import { Card } from '../../shared/components/Card';
import { RoundListItem } from '../../shared/components/RoundListItem';
import { Outlined } from '../../shared/components/custom-buttons/Outlined';
import { Contained } from '../../shared/components/custom-buttons/Contained';


export default function MatchEnded() {

  return (
    <ScrollView className='flex-1 p-2 pt-6'>
      <View className='gap-6'>

        <Text className='text-correct font-bold text-lg text-center'>
          Vitória
        </Text>
        {/* <Text className='text-wrong font-bold text-lg text-center'>
          Derrota
        </Text>
        <Text className='text-alert font-bold text-lg text-center'>
          Empate
        </Text> */}

        <Text className='text-text font-italic text-base text-center'>
          Uhul! Você escapou da forca e mostrou que é um mestre das palavras!
        </Text>


        <Section title='Rodadas'>
          <Card>
            <RoundListItem
              status='win'
              word='Abacate'
              tip='Fruta com casca verde'
              wrongLetters={['e', 'i', 'o', 'u', 'g']}
              correctLetters={['a', 'b', 'c', 't', 'e']}
            />
            <RoundListItem
              divider
              word='Jogo'
              status='win'
              tip='Algo para se divertir'
              wrongLetters={['a', 'e', 'i']}
              correctLetters={['j', 'o', 'g']}
            />
            <RoundListItem
              divider
              status='lose'
              word='Janela'
              tip='Pode estar aberto ou fechado'
              correctLetters={['e', 'a']}
              wrongLetters={['b', 'g', 'k', 'p', 't', 'r', 'q']}
            />
          </Card>
        </Section>


        <View className='flex-row items-center justify-center gap-6'>
          <Outlined
            text='Voltar'
          />
          <Contained
            text='Nova partida'
          />
        </View>

      </View>
    </ScrollView>
  );
}
