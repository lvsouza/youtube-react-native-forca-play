import { Text, TouchableOpacity, View } from 'react-native';

import { theme } from '../../themes/Theme';


type TKeyboardProps = {
  wrongWords: string[];
  correctWords: string[];
  onSelect(letter: string): void;
}
export const Keyboard = ({ correctWords, onSelect, wrongWords }: TKeyboardProps) => {
  return (
    <View className='gap-2 items-center'>
      <View className='flex-row gap-1'>
        {['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'].map((letter) => (
          <TouchableOpacity
            key={letter}
            onPress={() => onSelect(letter)}
            className='h-9 w-9 bg-paper rounded-sm justify-center'
            style={{
              backgroundColor: correctWords.includes(letter)
                ? theme.colors.correct
                : wrongWords.includes(letter)
                  ? theme.colors.wrong
                  : theme.colors.paper
            }}
          >
            <Text className='text-text font-bold text-2xl text-center uppercase'>
              {letter}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View className='flex-row gap-1'>
        {['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'].map((letter) => (
          <TouchableOpacity
            key={letter}
            onPress={() => onSelect(letter)}
            className='h-9 w-9 bg-paper rounded-sm justify-center'
            style={{
              backgroundColor: correctWords.includes(letter)
                ? theme.colors.correct
                : wrongWords.includes(letter)
                  ? theme.colors.wrong
                  : theme.colors.paper
            }}
          >
            <Text className='text-text font-bold text-2xl text-center uppercase'>
              {letter}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View className='flex-row gap-1'>
        {['z', 'x', 'c', 'v', 'b', 'n', 'm'].map((letter) => (
          <TouchableOpacity
            key={letter}
            onPress={() => onSelect(letter)}
            className='h-9 w-9 bg-paper rounded-sm justify-center'
            style={{
              backgroundColor: correctWords.includes(letter)
                ? theme.colors.correct
                : wrongWords.includes(letter)
                  ? theme.colors.wrong
                  : theme.colors.paper
            }}
          >
            <Text className='text-text font-bold text-2xl text-center uppercase'>
              {letter}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
