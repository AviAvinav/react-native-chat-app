import { useFonts, Inter_400Regular } from '@expo-google-fonts/inter';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
  });

  if (!fontsLoaded) return <></>;
  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <Text
        style={{ fontFamily: 'Inter_400Regular' }}
        className="text-2xl text-center text-gray-700"
      >
        Hello World
      </Text>
    </SafeAreaView>
  );
}
