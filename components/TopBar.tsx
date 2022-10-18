import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Icon from './atoms/Icon';

const TopBar = () => {
  return (
    <View className="flex flex-row justify-between items-center px-5 py-2">
      <Text className="text-2xl">ChitChat</Text>
      <View className="flex flex-row">
        <Icon name="search" />
        <Icon name="edit" />
      </View>
    </View>
  );
};

export default TopBar;
