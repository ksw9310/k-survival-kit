import { Tabs } from 'expo-router';
import { Text } from 'react-native';

function TabIcon({ emoji, active }: { emoji: string; active: boolean }) {
  return (
    <Text style={{ fontSize: 20, opacity: active ? 1 : 0.45 }}>{emoji}</Text>
  );
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#0f172a',
          borderTopColor: '#1e293b',
        },
        tabBarActiveTintColor: '#f43f5e',
        tabBarInactiveTintColor: '#64748b',
        headerStyle: { backgroundColor: '#0f172a' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused }) => <TabIcon emoji="🏠" active={focused} />,
        }}
      />
      <Tabs.Screen
        name="checklist"
        options={{
          title: 'Checklist',
          tabBarLabel: 'Checklist',
          tabBarIcon: ({ focused }) => <TabIcon emoji="✅" active={focused} />,
        }}
      />
      <Tabs.Screen
        name="currency"
        options={{
          title: 'Currency',
          tabBarLabel: 'Currency',
          tabBarIcon: ({ focused }) => <TabIcon emoji="💱" active={focused} />,
        }}
      />
      <Tabs.Screen
        name="emergency"
        options={{
          title: 'Emergency',
          tabBarLabel: 'Emergency',
          tabBarIcon: ({ focused }) => <TabIcon emoji="🆘" active={focused} />,
        }}
      />
      <Tabs.Screen
        name="nearby"
        options={{
          title: 'Nearby',
          tabBarLabel: 'Nearby',
          tabBarIcon: ({ focused }) => <TabIcon emoji="📍" active={focused} />,
        }}
      />
    </Tabs>
  );
}
