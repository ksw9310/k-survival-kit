import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { LanguageProvider } from '../context/LanguageContext';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useEffect(() => {
    const timer = setTimeout(() => {
      SplashScreen.hideAsync();
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <LanguageProvider>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: '#0f172a' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
          contentStyle: { backgroundColor: '#f8fafc' },
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false, title: '' }} />
        <Stack.Screen
          name="guide/[slug]"
          options={{ title: 'Guide', headerBackTitle: '', headerBackButtonDisplayMode: 'minimal' }}
        />
      </Stack>
    </LanguageProvider>
  );
}
