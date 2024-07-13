import { Stack } from "expo-router";

const signIn = true;
/*
const signIn = false;
*/

export default function RootLayout(){
    return(
        signIn? (
            <Stack 
            screenOptions= {{
            headerBlurEffect: 'regular',
            headerTransparent: true,
            headerShown:false,
            /*
            headerShadowVisible: false,
            (<Stack/>
            headerTitle:'Home'
            headerLargeTitle: true,
                headerStyle:{ backgroundColor: 'rgb(255, 255, 255)',
                */
            }} 
            />
        ):(
            <>
            </>
        )
    )
}