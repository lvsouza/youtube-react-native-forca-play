import { ScrollView, Text, View } from 'react-native';


export default function MatchOngoing() {
  const maskedWord = ['J', 'O', '_', 'O'];
  const tip = 'Algo para se divertir';


  return (
    <ScrollView className='flex-1 p-2 pt-6'>
      <View className='gap-6 items-center'>


        <Text className='text-text font-regular text-xl underline'>
          {tip}
        </Text>

        <View className='flex-row flex-wrap gap-2 items-center justify-center'>
          {maskedWord.map((letter, index) => (
            <View key={index} className='border-b-4 border-text h-9 w-9'>
              <Text className='text-text font-bold text-2xl text-center'>
                {letter === '_' ? '' : letter}
              </Text>
            </View>
          ))}
        </View>


      </View>
    </ScrollView>
  );
}
