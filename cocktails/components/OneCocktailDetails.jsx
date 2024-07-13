import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import FavoriteOn from './FavoriteOn';
import FavoriteOff from './FavoriteOff';

const styles = StyleSheet.create({
  oneItem: {},
  image: {},
  description: {},
});

export default function OneCocktailDetails(props) {
  const strDrink = props.match.params.strDrink;
  console.log(strDrink);

  const [isFavorite, setIsFavorite] = React.useState(false);
  const [cocktailDetails, setCocktailDetails] = React.useState([]);

  React.useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${strDrink}`)
      .then((res) => res.json())
      .then((data) => {
        setCocktailDetails(data.drinks);
        console.log(data.drinks);
      });
  }, []);

  return (
    <View style={styles.oneItem} >
      <View style={styles.image}>
        <Image style={styles.image}>
          {cocktailDetails.strDrinkThumb}
        </Image>
      </View>
      <View>
        <View>
          <View>
            <Text>
              Genres:
              {cocktailDetails.strCategory}
            </Text>
            <Text>
              Is alcoholic ?
              {cocktailDetails.strAlcoholic}
            </Text>
            <Text>
              Type of Glass:
              {cocktailDetails.strGlass}
            </Text>
          </View>
          <View>
            <Text>
              Name:
              {cocktailDetails.strDrink}
            </Text>
          </View>
        </View>
        <Text>
          Ingredients and quantities:
          {cocktailDetails.strIngredient1} - {cocktailDetails.strMeasure1}, {cocktailDetails.strIngredient2} - {cocktailDetails.strMeasure2}, {cocktailDetails.strIngredient3} - {cocktailDetails.strMeasure3},
          {cocktailDetails.strIngredient4} - {cocktailDetails.strMeasure4}, {cocktailDetails.strIngredient5} - {cocktailDetails.strMeasure5}, {cocktailDetails.strIngredient6} - {cocktailDetails.strMeasure6},
          {cocktailDetails.strIngredient7} - {cocktailDetails.strMeasure7}, {cocktailDetails.strIngredient8} - {cocktailDetails.strMeasure8}, {cocktailDetails.strIngredient9} - {cocktailDetails.strMeasure9}
          {cocktailDetails.strIngredient10} - {cocktailDetails.strMeasure10}, {cocktailDetails.strIngredient11} - {cocktailDetails.strMeasure11}, {cocktailDetails.strIngredient12} - {cocktailDetails.strMeasure12}
          {cocktailDetails.strIngredient13} - {cocktailDetails.strMeasure13}, {cocktailDetails.strIngredient14} - {cocktailDetails.strMeasure14}, {cocktailDetails.strIngredient15} - {cocktailDetails.strMeasure15}
        </Text>
        <View>
          <Pressable onPress={() => setIsFavorite(!isFavorite)}>
            {isFavorite ? <FavoriteOn />
              : <FavoriteOff />}
          </Pressable>
        </View>
      </View>
      <View>
        <View style={styles.description}>
          <View>
            <Text>Recipe:</Text>
            <Text>
              {cocktailDetails.strInstructions}
              {cocktailDetails.strInstructionsES}
              {cocktailDetails.strInstructionsDE}
              {cocktailDetails.strInstructionsFR}
              {cocktailDetails.strInstructionsIT}
            </Text>
            <Text>
              Last modification:
              {cocktailDetails.dateModified}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
