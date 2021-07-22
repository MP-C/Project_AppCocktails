import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import glasses from '../assets/glasses.jpg';
import iconRum from '../assets/iconRum.jpg';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#000000', // 16436a
    marginTop: 20,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  header: {

  },
  initialPhoto: {
    height: '95%',
    width: '30%',
  },
  headerText: {
    position: 'absolute',
    top: 100,
    left: 0,
    right: 10,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#FFB53C',
    fontSize: 20,
    fontWeight: 'bold',
  },
  header2: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#16436a',
    marginBottom: '1%',
  },
  tab1: {
    backgroundColor: '#F5F5F5',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    // alignContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    height: '95%',
    width: '30%',
  },
  tab2: {
    backgroundColor: '#16436a',

  },
  titleTabSelect: {
    marginTop: 20,
    fontSize: 25,
    color: '#FFB53C',
  },
  titleTabNoSelect: {
    marginTop: 20,
    fontSize: 20,
    color: '#FFB53C',
  },
  body: {
    display: 'flex',
    position: 'absolute',
    top: 196,
    left: 0,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    height: '80%',
    width: '100%',
    backgroundColor: '#F5F5F5',

  },
  bodyIntro: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  sizeInput: {
    height: 50,
  },
  input: {
    fontSize: 14,
    height: 40,
    backgroundColor: '#F5F5F5',
    marginTop: 17,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gray',
  },
  text: {
    marginTop: 20,
  },
  bodyCards: {

  },
  cardsCocktails: {

  },
});

export default function MyCocktails() {
  const [myFavorites, setMyFavorites] = useState([]);
  const [searchCocktail, setSearchCocktail] = useState(''); // to guarantee the searching is possible

  // TO NAVIGATE INTO OTHERS PAGES
  // to change into AllCocktails page
  const goToAllCocktails = () => {
    // props.navigation.push('AllCocktails');
  };
  // to change into MyCocktails page
  const goToMyCocktails = () => {
    // props.navigation.push('MyCocktails');
  };
  // to change into Favorites page
  const goToFavorites = () => {
    // props.navigation.push('Favorites');
  };

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/users/1/favorites/')
      .then((res) => res.data)
      .then((data) => {
        setMyFavorites(data);
        console.log(data);
      });
  }, []);

  const newLocal = '>';
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <ImageBackground source={glasses} style={{ width: 600, height: 150 }}>
            <View style={styles.headerText}>
              <Text style={styles.title}>Create your owns ideas and share them </Text>
            </View>
          </ImageBackground>
          <View style={styles.header2}>
            <View style={styles.tab2}>
              <TouchableOpacity
                onPress={() => (goToAllCocktails)}
                title="AllCocktails"
              >
                <Text style={styles.titleTabSelect}> AllCocktails</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.tab1}>
              <TouchableOpacity
                onPress={() => (goToMyCocktails)}
                title="MyCocktails"
              >
                <Text style={styles.titleTabSelect}>MyCocktails</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.tab2}>
              <TouchableOpacity
                onPress={() => (goToFavorites)}
                title="Favorites"
              >
                <Text style={styles.titleTabNoSelect}>Favorites</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.body}>
          <View>
            <View style={styles.bodyIntro}>
              <Text style={styles.text}> All your cocktails in one page </Text>
              <View style={styles.sizeInput}>
                <TextInput
                  mode="outlined"
                  label="Search for:"
                  value={searchCocktail}
                  onChange={(e) => setSearchCocktail(e.target.value)}
                  style={styles.input}
                  placeholder="Cocktail, alcohol, glass,.."
                />
              </View>
            </View>
            <View style={styles.bodyCards}>
              <View style={styles.cardsCocktails}>
                <Image style={styles.photoDrink} source={iconRum} />
              </View>
              <View>
                <Text style={styles.card}>
                  Name:
                  {myFavorites.cocktailName}
                </Text>
                <Text style={styles.cocktailsMyList} key={myFavorites.id}>
                  Category :
                  {myFavorites.strCategory}
                </Text>
                <Text style={styles.cocktailsMyList} key={myFavorites.id}>
                  Have alcochol ?
                  {myFavorites.isAlcoholic}
                </Text>
                <Text style={styles.cocktailsMyList} key={myFavorites.id}>
                  Glass Type :
                  {myFavorites.glass}
                </Text>
                <Text style={styles.cocktailsMyList} key={myFavorites.id}>
                  Ingredient :
                  {myFavorites.ingredient}
                </Text>
                <Text style={styles.cocktailsMyList} key={myFavorites.id}>
                  Recipe:
                  {myFavorites.ingredient}
                </Text>
                <Text style={styles.cocktailsMyList} key={myFavorites.id}>
                  Creation at:
                  {myFavorites.dateModified}
                </Text>
              </View>
            </View>
            <View style={styles.bodyCards}>
              <View style={styles.cardsCocktails}>
                {myFavorites.map((cocktail) => (
                  <View>
                    <Text style={styles.cocktailsMyList} key={cocktail.id}>
                      Name:
                      {cocktail.cocktailName}
                    </Text>
                    <Text style={styles.cocktailsMyList} key={cocktail.id}>
                      Category :
                      {cocktail.strCategory}
                    </Text>
                    <Text style={styles.cocktailsMyList} key={cocktail.id}>
                      Have alcochol ?
                      {cocktail.isAlcoholic}
                    </Text>
                    <Text style={styles.cocktailsMyList} key={cocktail.id}>
                      Glass Type :
                      {cocktail.glass}
                    </Text>
                    <Text style={styles.cocktailsMyList} key={cocktail.id}>
                      Ingredient :
                      {cocktail.ingredient}
                    </Text>
                    <Text style={styles.cocktailsMyList} key={cocktail.id}>
                      Recipe:
                      {cocktail.ingredient}
                    </Text>
                    <Text style={styles.cocktailsMyList} key={cocktail.id}>
                      Creation at:
                      {cocktail.dateModified}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView >
  );
}
