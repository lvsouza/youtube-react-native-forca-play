import { useState } from 'react';
import { Pressable, Text } from 'react-native';

import { theme } from '../../themes/Theme';


type TContainedProps = {
  text: string;
  disabled?: boolean;
  onPress?: () => void;
  color?: 'primary' | 'error';
}
export const Contained = ({ text, color, disabled, onPress }: TContainedProps) => {
  const [pressed, setPressed] = useState(false);


  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      className='px-5 py-4 rounded-sm'
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      style={{
        opacity: (pressed || disabled) ? 0.5 : 1,
        backgroundColor: color === 'primary'
          ? theme.colors.primary
          : color === 'error'
            ? theme.colors.wrong
            : theme.colors.primary,
      }}
    >
      <Text
        className='font-bold text-lg'
        style={{
          color: color === 'primary'
            ? theme.colors.primaryText
            : color === 'error'
              ? theme.colors.text
              : theme.colors.primaryText
        }}
      >
        {text}
      </Text>
    </Pressable>
  );
}
