import { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Session } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';

import Home from '../screens/Home';
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
      <Screen name="Home" component={session && session.user ? Home : Auth} />
    </Navigator>
  );
};

export default TabNavigator;
