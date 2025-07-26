import { useRouter } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';


export default function Index() {
  const router = useRouter();

  return (
    <View className='items-center justify-center flex-1 '>
      <Text className='font-regular text-text'>Home</Text>

      <TouchableOpacity onPress={() => router.push('/matches/MatchDetail')}>
        <Text
          className="text-xl font-bold text-text"
        >Go to Detail</Text>
      </TouchableOpacity>
    </View>
  );
}
