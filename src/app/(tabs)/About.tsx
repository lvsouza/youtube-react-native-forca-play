import { Linking, ScrollView, Text, View } from 'react-native';

import { Section } from '../../shared/components/Section';
import { Card } from '../../shared/components/Card';


export default function About() {

  const handleOpenEmail = () => {
    const subject = encodeURIComponent('Dúvidas ou sugestões sobre o ForcaPlay')
    const body = encodeURIComponent('Olá,\n\nEstou entrando em contato para enviar dúvidas ou sugestões sobre o jogo ForcaPlay.\n\nEscreva sua mensagem aqui:')

    Linking.openURL(`mailto:forcaplayonline@gmail.com?subject=${subject}&body=${body}`);
  }

  const handleOpenGameInBrowser = () => {
    Linking.openURL('https://game.forcaplay.com');
  }

  const handleOpenInstagram = () => {
    Linking.openURL('https://www.instagram.com/forcaplayonline');
  }

  const handleOpenFacebook = () => {
    Linking.openURL('https://www.facebook.com/people/Forca-Play/61573642481257');
  }


  return (
    <ScrollView>
      <View className='flex-1 pt-6 pb-6 p-2 gap-6 max-w-lg self-center w-full'>
        <Section title="Sobre o ForcaPlay">
          <Card>
            <View className='gap-5'>
              <Text className='text-text text-base font-regular'>
                Este aplicativo é uma versão offline do ForcaPlay,
                o clássico jogo da forca com um toque moderno. Aqui,
                você pode se divertir no modo solo, enfrentando desafios
                em diferentes níveis de dificuldade, sem precisar de
                internet. Ideal para passar o tempo e testar seu vocabulário
                onde estiver.
              </Text>
              <Text className='text-text text-base font-regular'>
                Este app foi criado com foco em simplicidade, jogabilidade
                rápida e acessível. Tudo funciona diretamente no seu dispositivo,
                sem necessidade de cadastro ou conexão com servidores.
              </Text>
              <Text className='text-text text-base font-regular'>
                Se você tiver dúvidas, encontrar algum problema ou
                quiser sugerir melhorias, entre em contato pelo e-mail:&nbsp;
                <Text className='text-primary underline' onPress={handleOpenEmail}>
                  forcaplayonline@gmail.com
                </Text>.
                Sua opinião é muito
                bem-vinda para tornar o jogo cada vez melhor!
              </Text>
            </View>
          </Card>
        </Section>

        <Section title="Outras formas de contato">
          <Card>
            <View className='gap-1 py-1'>
              <Text className='text-text text-base font-regular'>
                Jogue no navegador
              </Text>
              <Text
                onPress={handleOpenGameInBrowser}
                className='text-primary text-base font-regular underline'
              >
                https://game.forcaplay.com
              </Text>
            </View>

            <View className='border-background border-b' />

            <View className='gap-1 py-1'>
              <Text className='text-text text-base font-regular'>
                Instagram
              </Text>
              <Text
                onPress={handleOpenInstagram}
                className='text-primary text-base font-regular underline'
              >
                https://www.instagram.com/forcaplayonline
              </Text>
            </View>

            <View className='border-background border-b' />

            <View className='gap-1 py-1'>
              <Text className='text-text text-base font-regular'>
                Facebook
              </Text>
              <Text
                numberOfLines={1}
                onPress={handleOpenFacebook}
                className='text-primary text-base font-regular underline'
              >
                https://www.facebook.com/people/Forca-Play/61573642481257/
              </Text>
            </View>
          </Card>
        </Section>
      </View>
    </ScrollView>
  );
}
