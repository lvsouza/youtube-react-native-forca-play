import { Text, View } from 'react-native';

import { Section } from '../../shared/components/Section';
import { Card } from '../../shared/components/Card';


export default function About() {

  return (
    <View className='gap-6 px-2'>
      <Section title="Sobre o ForcaPlay">
        <Card>
          <Text className='text-text text-base font-regular'>
            Este aplicativo é uma versão offline do ForcaPlay, o clássico jogo da forca com um toque moderno. Aqui, você pode se divertir no modo solo, enfrentando desafios em diferentes níveis de dificuldade, sem precisar de internet. Ideal para passar o tempo e testar seu vocabulário onde estiver.

            Este app foi criado com foco em simplicidade, jogabilidade rápida e acessível. Tudo funciona diretamente no seu dispositivo, sem necessidade de cadastro ou conexão com servidores.

            Se você tiver dúvidas, encontrar algum problema ou quiser sugerir melhorias, entre em contato pelo e-mail: forcaplayonline@gmail.com. Sua opinião é muito bem-vinda para tornar o jogo cada vez melhor!
          </Text>
        </Card>
      </Section>

      <Section title="Outras formas de contato">
        <Card>
          <Text className='text-text text-base font-regular'>
            Este aplicativo é uma versão offline
          </Text>
        </Card>
      </Section>
    </View>
  );
}
