import { useState } from "react";
import { Alert, View, Text, TouchableOpacity, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { supabase } from "../lib/supabase";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    setLoading(false);
  }

  async function signUpWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    setLoading(false);
  }
  return (
    <SafeAreaView>
      <View className="px-5">
        <View className="mt-5 py-1 self-stretch">
          <TextInput
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
            value={email}
            autoCapitalize={"none"}
          />
        </View>
        <View className="py-1 self-stretch">
          <TextInput
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry={true}
            placeholder="Password"
            autoCapitalize={"none"}
          />
        </View>
        <View className="mt-5 py-1 self-stretch">
          <TouchableOpacity
            disabled={loading}
            onPress={() => signInWithEmail()}
          >
            <Text>Sign In</Text>
          </TouchableOpacity>
        </View>
        <View className="py-1 self-stretch">
          <TouchableOpacity
            disabled={loading}
            onPress={() => signUpWithEmail()}
          >
            <Text>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Auth;
