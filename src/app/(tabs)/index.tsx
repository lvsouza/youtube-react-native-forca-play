import { useRouter } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';
import { Contained } from '../../shared/components/custom-buttons/Contained';
import { Outlined } from '../../shared/components/custom-buttons/Outlined';


export default function Index() {
  const router = useRouter();

  return (
    <View className='flex-1 px-2'>
      <View className='items-center'>
        <Contained
          text='Nova partida'
        />
        <Outlined
          text='Voltar'
        />
      </View>
    </View>
  );
}
