import { useState } from 'react';
import { Tabs, TabSlot, TabList, TabTrigger, TabTriggerSlotProps } from 'expo-router/ui';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Pressable, Text, View } from 'react-native';

import { theme } from '../../shared/themes/Theme';


export default function Layout() {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        marginTop: insets.top,
        marginBottom: insets.bottom,
        marginLeft: insets.left,
        marginRight: insets.right,
      }}
    >
      <Tabs>
        <TabList
          style={{
            gap: 16,
            paddingVertical: 8,
            paddingHorizontal: 16,
            marginHorizontal: 'auto',
            borderRadius: theme.corner.large,
            backgroundColor: theme.colors.paper,
          }}
        >
          <TabTrigger name="index" href="/" asChild>
            <CustomTabButton
              text='Início'
            />
          </TabTrigger>
          <TabTrigger name="About" href="/About" asChild>
            <CustomTabButton
              text='Sobre'
            />
          </TabTrigger>
        </TabList>


        <TabSlot />
      </Tabs>
    </View >
  );
}

type TCustomTabButtonProps = TabTriggerSlotProps & {
  text: string;
}
const CustomTabButton = ({ isFocused, text, onPressIn, onPressOut, ...props }: TCustomTabButtonProps) => {
  const [pressed, setPressed] = useState(false);

  return (
    <Pressable
      {...props}
      className='px-2 py-1'
      style={{ opacity: pressed ? 0.5 : 1 }}
      onPressIn={(event) => { setPressed(true); onPressIn?.(event); }}
      onPressOut={(event) => { setPressed(false); onPressOut?.(event); }}
    >
      <Text
        className='text-text text-base font-regular'
        style={{ textDecorationLine: isFocused ? 'underline' : undefined }}
      >
        {text}
      </Text>
    </Pressable>
  );
}

