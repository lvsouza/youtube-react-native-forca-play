import { Text, View } from 'react-native';
import { Section } from '../../shared/components/Section';
import { Card } from '../../shared/components/Card';
import { RoundListItem } from '../../shared/components/RoundListItem';


export default function MatchDetail() {

  return (
    <View className='flex-1 p-2 gap-2'>


      <Section title='Modo clássico'>
        <Text>Detalhe</Text>
      </Section>

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

    </View>
  );
}
