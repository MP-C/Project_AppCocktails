import { ScrollView, Text, View } from 'react-native';
import {useHeaderHeight} from '@react-navigation/elements';
import { Stack } from 'expo-router';

export default function About() {
    const headerHeight = useHeaderHeight();
    return (
        <View style={{
            /* 
            paddingTop: headerHeight
            */
        }}>
            <Stack>
                <Stack.Screen 
                    name='Home'
                    options={{
                    headerSearchBarOptions:{
                        placeholder:'Look for events',
                        hideWhenScrolling: false,
                    }
                }}/>
            </Stack>
            
            <ScrollView contentInsetAdjustmentBehavior ="automatic">
                <Text>1111111111111</Text>
                <Text>2222222222222222</Text>
                <Text>33333333333333</Text>
                <Text>4444444444</Text>
                <Text>555555555555</Text>
                <Text>666666666666666</Text>
                <Text>7777777777777</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Fesed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Fdasdaeed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>asdasdsa</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feeddasdasd</Text>
                <Text>Feed</Text>
                <Text>Feasdasdasdsaed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
                <Text>Feed</Text>
            </ScrollView>
        </View>
    )
}