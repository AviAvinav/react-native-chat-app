import { View, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';

const StoriesBar = () => {
  return (
    <View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        className="px-5 py-2"
      >
        <View className="border-2 border-blue-700 rounded-full">
          <View className="rounded-full w-14 h-14 bg-blue-200 flex items-center justify-center m-0.5">
            <Feather name="plus" size={28} color="rgb(29, 78, 216)" />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default StoriesBar;
