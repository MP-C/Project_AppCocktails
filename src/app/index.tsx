/* Login page */
import { Redirect, Stack } from 'expo-router';

export default function Home() {
    return(
            <Redirect href="/(tabs)" />
        /*<Stack>
            <Stack.Screen
                name="home"
                options={{
                headerTitle:'index',
                headerBlurEffect: 'regular', headerTransparent: true,
                headerLargeTitle: true,
                headerLargeTitleStyle: {color: 'black'},
                headerLargeTitleShadowVisible: false,
                headerStyle:{ backgroundColor: 'rgb(255, 255, 255)'
                }
                
            }}/>
        </Stack>*/
    )
}