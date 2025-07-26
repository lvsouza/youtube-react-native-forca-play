import { Text, View } from 'react-native';


type TSectionProps = {
  title: string;
  children: React.ReactNode;
}
export const Section = ({ children, title }: TSectionProps) => {

  return (
    <View className='gap-2'>
      <Text className='text-text font-regular text-base'>
        {title}
      </Text>

      <View>
        {children}
      </View>
    </View>
  );
}
