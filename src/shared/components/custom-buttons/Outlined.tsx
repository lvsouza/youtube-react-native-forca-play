import { useState } from 'react';
import { Pressable, Text } from 'react-native';

import { theme } from '../../themes/Theme';


type TOutlinedProps = {
  text: string;
  disabled?: boolean;
  onPress?: () => void;
  color?: 'primary' | 'error';
}
export const Outlined = ({ text, color, disabled, onPress }: TOutlinedProps) => {
  const [pressed, setPressed] = useState(false);

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      className='border-4 bg-paper px-4 py-3 rounded-sm'
      style={{
        opacity: (pressed || disabled) ? 0.5 : 1,
        borderColor: color === 'primary'
          ? theme.colors.primary
          : color === 'error'
            ? theme.colors.wrong
            : theme.colors.primary

      }}
    >
      <Text
        className='font-bold text-lg'
        style={{
          color: color === 'primary'
            ? theme.colors.primary
            : color === 'error'
              ? theme.colors.wrong
              : theme.colors.primary
        }}
      >
        {text}
      </Text>
    </Pressable>
  );
}
