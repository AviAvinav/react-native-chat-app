import { SafeAreaView } from 'react-native-safe-area-context';

import { View, Text } from 'react-native';

import TopBar from '../components/TopBar';
import StoriesBar from '../components/StoriesBar';

const Home = () => {
  return (
    <SafeAreaView className="flex-1 bg-gray-200">
      <TopBar />
      <StoriesBar />
    </SafeAreaView>
  );
};

export default Home;
