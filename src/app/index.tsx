/* Login page */
import { Redirect, Stack } from 'expo-router';

/*
const signIn = true;
*/
const signIn = false;

export default function Home() {
    return(        
        signIn? (
        <Redirect href="/(tabs)" />
    ):(
        <Redirect href="login" />
    )

            
    )
}