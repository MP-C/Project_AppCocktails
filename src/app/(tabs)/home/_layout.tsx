import { Stack, Tabs } from "expo-router";
import { FontAwesome } from '@expo/vector-icons';
import { View } from "react-native";

const Layout = () =>{
    return(
        <Stack>
            <Stack.Screen
                name="index" options={{ 
                headerTitle: 'Home',
                headerBlurEffect: 'regular',
                headerShadowVisible: false,
                headerLargeTitle: true,
                headerLargeTitleStyle: {color:'#ff00ff'},
                headerLargeTitleShadowVisible: false,
                headerTransparent: true,
                headerSearchBarOptions:{
                    placeholder:'Look for events',
                    hideWhenScrolling: false,
                }

            }} />
        </Stack>
    )
}