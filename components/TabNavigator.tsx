import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useEffect, useState } from 'react';
import Home from '../screens/Home';
import { Session } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';
import Auth from '../screens/Auth';

const { Navigator, Screen } = createBottomTabNavigator();

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
      <Screen options={{ headerShown: false }} name="Auth" component={Auth} />
      <Screen options={{ headerShown: false }} name="Home" component={Home} />
    </Navigator>
  );
};

export default TabNavigator;
