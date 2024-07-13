import React from 'react';
import {
  Dimensions, Screen, StatusBar, StyleSheet, View,
} from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import LoginPage from './components/LoginPage';
// import InscriptionsPage from './components/InscriptionsPage';
// import AllCocktails from './components/AllCocktails';
// import MyCocktails from './components/MyCocktails';
// import OneCocktailDetails from './components/OneCocktailDetails';
import FavoriteCocktails from './components/FavoriteCocktails';
// import { createStackNavigator } from '@react-navigation/stack';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
});

/*
export default function App() {

  return (
    <NavigationContainer style={styles.container}>
      <StatusBar />
      <Stack.Navigator initialRouteName="WelcomePage">
        <Stack.Screen name="WelcomePage" component={WelcomePage} options={{ headerShown: false }} />
        <Screen name="LoginPage" component={LoginPage} options={{ headerShown: false }} />
        <Screen name="InscriptionsPage" component={InscriptionsPage} options={{ headerShown: false }} />
        <Screen name="AllCocktails" component={AllCocktails} options={{ headerShown: false }} />
        <Screen name="OneCocktailDetails" component={CocktailsDetails} options={{ headerShown: false }} />
        <Screen name="MyCocktails" component={MyCocktails} options={{ headerShown: false }} />
        <Screen name="FavoriteCocktails" component={FavoriteCocktails} options={{ headerShown: false }} />
        </Stack.Navigator>
        </NavigationContainer>
*/

export default function App() {
  // const Stack = createStackNavigator();
  return (
    <View style={styles.container}>
      <FavoriteCocktails />
    </View>
  );
}
