import { View, ScrollView, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { supabase } from "../lib/supabase";

const StoriesBar = () => {
  const getTestChat = async () => {
    const { data } = await supabase.from("test").select("*");

    console.log(data);
  };
  return (
    <View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        className="px-5 py-2"
      >
        <TouchableOpacity
          onPress={() => getTestChat()}
          className="border-2 border-blue-700 rounded-full"
        >
          <View className="rounded-full w-14 h-14 bg-blue-200 flex items-center justify-center m-0.5">
            <Feather name="plus" size={28} color="rgb(29, 78, 216)" />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default StoriesBar;
