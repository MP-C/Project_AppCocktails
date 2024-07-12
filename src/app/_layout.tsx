import { Stack } from "expo-router";

const signIn = true;
/*const signIn = false; */

export default function RootLayout(){
    return(
        signIn? (
            (<Stack screenOptions={{ headerShown: false }} />)
        ):(
            <>
            </>
        )
    )
}