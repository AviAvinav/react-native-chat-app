import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import TabNavigator from "./components/TabNavigator";

import { Session } from "@supabase/supabase-js";
import { supabase } from "./lib/supabase";
import Auth from "./screens/Auth";

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
