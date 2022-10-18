import { View, Image, Text } from 'react-native';

interface ChatBarProps {
  imageUri: string;
  name: string;
  lastMessage: string;
  time: string;
}

const ChatBar = ({ imageUri, name, lastMessage, time }: ChatBarProps) => {
  return (
    <View className="flex flex-row items-center mb-4">
      <Image source={{ uri: imageUri }} className="rounded-full w-16 h-16" />
      <View className="flex-grow pl-4">
        <Text className="text-black text-lg font-semibold">{name}</Text>
        <Text className="text-gray-700">{lastMessage}</Text>
      </View>
      <Text className="">{time}</Text>
    </View>
  );
};

export default ChatBar;
