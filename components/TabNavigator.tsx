import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useEffect, useState } from "react";
import Home from "../screens/Home";
import { Session } from "@supabase/supabase-js";
import { supabase } from "../lib/supabase";
import Auth from "../screens/Auth";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Navigator, Screen } = createNativeStackNavigator();

const TabNavigator = () => {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);
  return (
    <Navigator>
      {session && session.user ? (
        <Screen options={{ headerShown: false }} name="Home" component={Home} />
      ) : (
        <Screen options={{ headerShown: false }} name="Auth" component={Auth} />
      )}
    </Navigator>
  );
};

export default TabNavigator;
