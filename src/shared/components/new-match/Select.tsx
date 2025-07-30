import { Text, View } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import SelectDropdown from 'react-native-select-dropdown'

import { theme } from '../../themes/Theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


type TSelectProps = {
  data: any[];
  label: string;
  value: string | number | null;
  onSelect: (item: any) => void;
  onGetItemLabel: (item: any | undefined) => string | undefined;
  onGetSelected: (value: string | number | null, item: any) => any;
}
export const Select = ({ data, label, onSelect, value, onGetSelected, onGetItemLabel }: TSelectProps) => {
  const insets = useSafeAreaInsets();


  return (
    <View className='gap-1'>
      <Text className='font-bold text-text text-sm'>
        {label}
      </Text>

      <SelectDropdown
        data={data}
        dropdownOverlayColor='transparent'
        onSelect={(selectedItem) => onSelect(selectedItem)}
        defaultValue={data.find(item => onGetSelected(value, item))}
        dropdownStyle={{
          padding: 8,
          marginTop: -insets.bottom,
          borderRadius: theme.corner.small,
          backgroundColor: theme.colors.paper,
        }}
        renderButton={(selectedItem) => (
          <View className='border-4 border-text rounded px-4 py-4 flex-row justify-between items-center'>
            <Text className='text-text text-base font-regular'>
              {onGetItemLabel(selectedItem) || 'Selecione'}
            </Text>

            <MaterialIcons
              size={24}
              name='arrow-drop-down'
              color={theme.colors.text}
            />
          </View>
        )}
        renderItem={(renderedItem) => (
          <View
            className='p-4 rounded'
            style={{
              backgroundColor: onGetSelected(value, renderedItem)
                ? theme.colors.background
                : undefined
            }}
          >
            <Text className='text-text font-regular text-base'>
              {onGetItemLabel(renderedItem)}
            </Text>
          </View>
        )}
      />
    </View>
  );
}
