import { View } from 'react-native';


type TCardProps = {
  className?: string;
  children: React.ReactNode;
}
export const Card = ({ children, className = '' }: TCardProps) => {


  return (
    <View className={`bg-paper p-4 rounded-lg gap-0.5 ${className}`}>
      {children}
    </View>
  );
}
