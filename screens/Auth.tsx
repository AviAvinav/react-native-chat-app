import { useState } from 'react';
import { Alert, View, Text, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { supabase } from '../lib/supabase';

const Auth = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggendIn] = useState(false);

  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    setLoading(false);
    setIsLoggendIn(true);
    navigation.navigate('Home');
  }

  async function signUpWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    setLoading(false);
    setIsLoggendIn(true);
    navigation.navigate('Home');
  }
  return (
    <SafeAreaView>
      <View>
        <View className="mt-5 py-1 self-stretch">
          <TextInput
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
            value={email}
            autoCapitalize={'none'}
          />
        </View>
        <View className="py-1 self-stretch">
          <TextInput
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry={true}
            placeholder="Password"
            autoCapitalize={'none'}
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
            <Text>Sign Out</Text>
          </TouchableOpacity>
        </View>
        <Text>{isLoggedIn ? 'Logged In' : 'Not logged in'}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Auth;
