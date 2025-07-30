import { Text, View } from 'react-native';


type TSectionProps = {
  children: React.ReactNode;
  title: string | React.ReactNode;
}
export const Section = ({ children, title }: TSectionProps) => {

  return (
    <View className='gap-2'>
      {['string', 'number', 'bigint', 'boolean'].includes(typeof title)
        ? (
          <Text className='text-text font-regular text-base'>
            {title}
          </Text>
        )
        : title
      }

      <View>
        {children}
      </View>
    </View>
  );
}
