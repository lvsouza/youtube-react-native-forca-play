import { useState } from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Pressable, Text, View } from 'react-native';

import { theme } from '../../themes/Theme';


type TMatchListItemProps = {
  mode: 'classic';
  divider?: boolean;
  currentRound?: number;
  numberOfRounds: number;
  status: 'ongoing' | 'lose' | 'win' | 'draw';
  onPress: () => void;
}

export const MatchListItem = ({ mode, status, numberOfRounds, divider, currentRound, onPress }: TMatchListItemProps) => {
  const [pressed, setPressed] = useState(false);


  return (
    <Pressable
      onPress={onPress}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      className='flex-row px-2 py-1 border-background items-center justify-between'
      style={{
        opacity: pressed ? 0.5 : undefined,
        borderTopWidth: divider ? 1 : undefined,
      }}
    >
      <View className='gap-1'>
        {mode === 'classic' && (
          <Text className='text-text font-regular text-base'>
            Modo clássico
          </Text>
        )}

        <View className='gap-1 flex-row'>
          {status === 'ongoing' && (
            <Text className='text-correct font-bold'>
              Em andamento
            </Text>
          )}
          {status === 'draw' && (
            <Text className='text-alert font-bold'>
              Empate
            </Text>
          )}
          {status === 'lose' && (
            <Text className='text-wrong font-bold'>
              Derrota
            </Text>
          )}
          {status === 'win' && (
            <Text className='text-correct font-bold'>
              Vitória
            </Text>
          )}

          <Text className='text-text font-regular'>
            - {status === 'ongoing' && `${currentRound}/`}{numberOfRounds} rodadas
          </Text>
        </View>
      </View>

      <MaterialIcons
        size={24}
        name={status === 'ongoing' ? 'play-arrow' : 'keyboard-arrow-right'}
        color={status === 'ongoing'
          ? theme.colors.correct
          : theme.colors.text
        }
      />
    </Pressable>
  );
}
