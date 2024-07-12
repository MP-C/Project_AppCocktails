import { Stack, Tabs } from "expo-router";
import { FontAwesome } from '@expo/vector-icons';
import { TabBarIcon } from '../../../src/components/TabBarIconDefault';
import { View } from "react-native";

export default function TabsLayout() {
    return(
        <Tabs screenOptions={{
            tabBarActiveTintColor: 'black',
            tabBarShowLabel: false,
         }}>
            <Tabs.Screen name="index"
                options={{
                    headerTitle: 'Home',
                    tabBarIcon: ({color, focused }) => (
                        <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color}
                    />
                )
            }} />
                <Tabs.Screen name="events"
            options={{
                headerTitle: 'Create new events',
                tabBarIcon: ({color, focused }) => (
                    <TabBarIcon name={focused ? 'calendar' : 'calendar-outline'} color={color}
                />
            )
        }} />
        <Tabs.Screen name="profile"
            options={{
                headerTitle: 'Profile',
                tabBarIcon: ({color, focused }) => (
                    <TabBarIcon name={focused ? 'person' : 'person-outline'} color={color}
                />
            )
        }} />
    </Tabs>
    )
}