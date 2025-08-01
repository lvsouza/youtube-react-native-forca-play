import { Text, View } from 'react-native';


type TRoundListItemProps = {
  tip: string;
  word: string;
  divider?: boolean;
  wrongLetters: string[];
  correctLetters: string[];
  status: 'win' | 'lose' | 'playing' | 'setup';
}
export const RoundListItem = ({ divider, correctLetters, status, tip, word, wrongLetters }: TRoundListItemProps) => {

  return (
    <View
      style={{ borderTopWidth: divider ? 1 : undefined, }}
      className='px-2 py-1 border-background'
    >
      <View className='flex-row justify-between items-center mb-2'>
        <Text className='text-text font-bold text-lg uppercase'>
          {word}
        </Text>

        {status === 'win' && (
          <Text className='text-correct font-bold text-sm'>
            Vitória
          </Text>
        )}
        {status === 'lose' && (
          <Text className='text-wrong font-bold text-sm'>
            Derrota
          </Text>
        )}
      </View>

      <View className='flex-row gap-2'>
        <Text className='text-text font-bold'>
          Dica:
        </Text>
        <Text className='text-text font-italic'>
          {tip}
        </Text>
      </View>

      <View className='flex-row gap-2'>
        <Text className='text-text font-bold'>
          {correctLetters.length} acertos:
        </Text>
        <Text className='text-text font-italic'>
          {correctLetters.join(', ')}
        </Text>
      </View>

      <View className='flex-row gap-2'>
        <Text className='text-text font-bold'>
          {wrongLetters.length} erros:
        </Text>
        <Text className='text-text font-italic'>
          {wrongLetters.join(', ')}
        </Text>
      </View>
    </View>
  );
}
