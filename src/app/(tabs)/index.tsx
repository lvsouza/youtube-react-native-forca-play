import { useRouter } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';


export default function Index() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontFamily: 'PoppinsBold' }}>Home</Text>


      <TouchableOpacity onPress={() => router.push('/matches/MatchDetail')}>
        <Text style={{ fontFamily: 'PoppinsBold' }}>Go to Detail</Text>
      </TouchableOpacity>
    </View>
  );
}
