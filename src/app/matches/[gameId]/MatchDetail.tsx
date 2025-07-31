import { ScrollView, Text, View } from 'react-native';

import { RoundListItem } from '../../../shared/components/RoundListItem';
import { Section } from '../../../shared/components/Section';
import { Card } from '../../../shared/components/Card';


export default function MatchDetail() {

  return (
    <ScrollView className='flex-1 p-2'>
      <View className='gap-2'>
        <Section
          title={
            <Text className='text-text font-base font-regular'>
              Modo clássico (
              <Text className='font-bold text-correct'>Vitoria</Text>
              {/* <Text className='font-bold text-wrong'>Derrota</Text>
              <Text className='font-bold text-alert'>Empate</Text> */}
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
                  3
                </Text>
              </Card>
              <Card className='flex-1 aspect-square justify-center items-center gap-1'>
                <Text className='text-text text-center font-regular'>
                  Vitórias
                </Text>
                <Text className='text-text text-center font-bold text-lg'>
                  2
                </Text>
              </Card>
              <Card className='flex-1 aspect-square justify-center items-center gap-1'>
                <Text className='text-text text-center font-regular'>
                  Derrotas
                </Text>
                <Text className='text-text text-center font-bold text-lg'>
                  1
                </Text>
              </Card>
            </View>

            <View className='gap-2 flex-row'>
              <Card className='flex-1 aspect-square justify-center items-center gap-1'>
                <Text className='text-text text-center font-regular'>
                  Dificuldade
                </Text>
                <Text className='text-text text-center font-bold text-lg'>
                  Média
                </Text>
              </Card>
              <Card className='flex-1 aspect-square justify-center items-center gap-1'>
                <Text className='text-text text-center font-regular'>
                  Duração da rodada
                </Text>
                <Text className='text-text text-center font-bold text-lg'>
                  3 min.
                </Text>
              </Card>
              <View className='flex-1 p-4 aspect-square' />
            </View>
          </View>
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
    </ScrollView>
  );
}
