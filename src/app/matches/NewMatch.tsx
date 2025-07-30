import { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';

import { Select } from '../../shared/components/new-match/Select';


export default function NewMatch() {

  const [selected, setSelected] = useState('');


  return (
    <ScrollView className='flex-1 p-2'>
      <View className='gap-2'>
        <Text>New match {selected}</Text>

        <Select
          value={selected}
          label='Dificuldade'
          onGetItemLabel={(item) => item?.name || ''}
          onSelect={(selectedItem) => setSelected(selectedItem.id)}
          onGetSelected={(selectedValue, item) => item.id === selectedValue}
          data={[
            { id: '1', name: 'Um' },
            { id: '2', name: 'Dois' },
            { id: '3', name: 'Três' },
            { id: '4', name: 'Quatro' },
          ]}
        />
      </View>
    </ScrollView>
  );
}
