import { Stack } from 'expo-router';

import { 
  useFonts, 
  KumbhSans_400Regular, 
  KumbhSans_700Bold 
} from '@expo-google-fonts/kumbh-sans';

export default function RootLayout() {
    const [fontsLoaded] = useFonts({
    KumbhSans_400Regular,
    KumbhSans_700Bold,
  });

  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Avisos', headerShown: false }}  />
      <Stack.Screen name="TelaCriarAviso" options={{ title: 'CriarAviso', headerShown: false }}  />
      <Stack.Screen name="TelaEditarAviso" options={{ title: 'EditarAviso', headerShown: false }}  />
    </Stack>
  );
}
