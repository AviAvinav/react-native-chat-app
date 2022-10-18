import { useFonts, Inter_400Regular } from '@expo-google-fonts/inter';
import Home from './screens/Home';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
  });

  if (!fontsLoaded) return <></>;
  return <Home />;
}
