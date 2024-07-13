import React, { useState, useEffect } from 'react';
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
import OneCocktail from './OneCocktail';
import yourOwn from '../assets/yourOwn.jpg';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#000000', // '#000000', // 16436a
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
    right: 250,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#FFB53C',
    fontSize: 20,
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
    alignContent: 'center',
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
    fontSize: 15,
    color: '#FFB53C',
  },
  titleTabNoSelect: {
    marginTop: 20,
    fontSize: 15,
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

export default function AllCocktails() {
  const [cocktails, setCoktails] = useState([]);
  const [searchCocktail, setSearchCocktail] = React.useState(''); // to guarantee the searching is possible

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`)
      .then((res) => res.json())
      .then((data) => {
        setCoktails(data.drinks);
        console.log(data.drinks);
      });
  }, []);

  /*
  const filterCocktails = cocktails ? cocktails.filter((cocktail) => {
    return cocktail.drinks.strDrink.includes(searchCocktail) || cocktail.drinks.strIngredient1.includes(searchCocktail)
  }) : [];

  const showCocktails = filterCocktails = null ? 'rum' : searchCocktail;
*/

  // TO NAVIGATE INTO OTHERS PAGES
  // to change into AllCocktails page
  const goToAllCocktails = () => {
    props.navigation.push('AllCocktails');
  };
  // to change into MyCocktails page
  const goToMyCocktails = () => {
    props.navigation.push('MyCocktails');
  };
  // to change into Favorites page
  const goToFavorites = () => {
    props.navigation.push('Favorites');
  };

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <ImageBackground source={yourOwn} style={{ width: 600, height: 150 }}>
            <View style={styles.headerText}>
              <Text style={styles.title}>Bring your perfered Cocktail to Home </Text>
            </View>
          </ImageBackground>
          <View style={styles.header2}>
            <View style={styles.tab1}>
              <TouchableOpacity
                onPress={() => (goToAllCocktails)}
                title="AllCocktails"
              >
                <Text style={styles.titleTabSelect}> AllCocktails</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.tab2}>
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
              <Text style={styles.text}> All cocktails in the World in your pocket</Text>
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
                {cocktails.map((cocktail) => (
                  <View>
                    <OneCocktail
                      key=""
                      id={cocktail.idDrink}
                      name={cocktail.strDrink}
                      category={cocktail.strCategory}
                      alcochol={cocktail.strAlcoholic}
                      glass={cocktail.strGlass}
                      image={cocktail.strDrinkThumb}
                      principalIngredient={cocktail.strIngredient1}
                      modificationDate={cocktail.dateModified}
                    />
                  </View>
                ))}
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
