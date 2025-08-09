import { Text, TouchableOpacity, View } from 'react-native';

import { theme } from '../../themes/Theme';



type TCustomKeyboardButtonProps = {
  letter: string;
  wrongGuesses: string[];
  correctGuesses: string[];
  disabled: boolean;
  onSelect: (letter: string) => void;
}
const CustomKeyboardButton = ({ correctGuesses, disabled, letter, wrongGuesses, onSelect }: TCustomKeyboardButtonProps) => {
  return (
    <TouchableOpacity
      key={letter}
      onPress={() => onSelect(letter)}
      className='h-full aspect-square bg-paper rounded-sm justify-center'
      disabled={disabled || correctGuesses.includes(letter) || wrongGuesses.includes(letter)}
      style={{
        opacity: disabled ? 0.5 : undefined,
        backgroundColor: correctGuesses.includes(letter)
          ? theme.colors.correct
          : wrongGuesses.includes(letter)
            ? theme.colors.wrong
            : theme.colors.paper
      }}
    >
      <Text className='text-text font-bold text-2xl text-center uppercase'>
        {letter}
      </Text>
    </TouchableOpacity>
  );
}


type TKeyboardProps = {
  disabled: boolean;
  wrongGuesses: string[];
  correctGuesses: string[];
  onSelect(letter: string): void;
}
export const Keyboard = ({ correctGuesses, onSelect, wrongGuesses, disabled }: TKeyboardProps) => {
  return (
    <View className='gap-2 items-center'>
      <View className='flex-row gap-1 md:gap-2 h-9 md:h-14 lg:h-16'>
        {['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'].map((letter) => (
          <CustomKeyboardButton
            key={letter}
            letter={letter}
            disabled={disabled}
            onSelect={onSelect}
            wrongGuesses={wrongGuesses}
            correctGuesses={correctGuesses}
          />
        ))}
      </View>
      <View className='flex-row gap-1 md:gap-2 h-9 md:h-14 lg:h-16'>
        {['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'].map((letter) => (
          <CustomKeyboardButton
            key={letter}
            letter={letter}
            disabled={disabled}
            onSelect={onSelect}
            wrongGuesses={wrongGuesses}
            correctGuesses={correctGuesses}
          />
        ))}
      </View>
      <View className='flex-row gap-1 md:gap-2 h-9 md:h-14 lg:h-16'>
        {['z', 'x', 'c', 'v', 'b', 'n', 'm'].map((letter) => (
          <CustomKeyboardButton
            key={letter}
            letter={letter}
            disabled={disabled}
            onSelect={onSelect}
            wrongGuesses={wrongGuesses}
            correctGuesses={correctGuesses}
          />
        ))}
      </View>
    </View>
  );
}
