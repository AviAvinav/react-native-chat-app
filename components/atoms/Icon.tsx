import { TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";

interface IconProps {
  name: "search" | "edit" | "log-out";
  onPress?: () => void;
}

const Icon = ({ name, onPress }: IconProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="bg-gray-300 p-2 ml-4 rounded-full flex items-center justify-center"
    >
      <Feather name={name} size={22} color="black" />
    </TouchableOpacity>
  );
};

export default Icon;
