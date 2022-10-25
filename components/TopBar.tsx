import { View, Text } from "react-native";
import Icon from "./atoms/Icon";
import { supabase } from "../lib/supabase";

const TopBar = () => {
  const signOut = async () => {
    await supabase.auth.signOut();
  };
  return (
    <View className="flex flex-row justify-between items-center px-5 py-2">
      <Text className="text-2xl">ChitChat</Text>
      <View className="flex flex-row">
        <Icon name="search" />
        <Icon name="edit" />
        <Icon onPress={() => signOut()} name="log-out" />
      </View>
    </View>
  );
};

export default TopBar;
