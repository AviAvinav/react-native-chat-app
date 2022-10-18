import { View } from 'react-native';
import { Feather } from '@expo/vector-icons';

interface IconProps {
  name: 'search' | 'edit';
}

const Icon = ({ name }: IconProps) => {
  return (
    <View className="bg-gray-300 p-2 ml-4 rounded-full flex items-center justify-center">
      <Feather name={name} size={22} color="black" />
    </View>
  );
};

export default Icon;
