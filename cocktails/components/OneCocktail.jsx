import React from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FavoriteOn from './FavoriteOn';
import FavoriteOff from './FavoriteOff';

const styles = StyleSheet.create({
  oneItem: {},
  image: {},
  description: {},
});

// eslint-disable-next-line max-len
export default function OneCocktail({
  name,
  principalIngredient,
  modificationDate,
  category,
  alcochol,
  glass,
  image,
}) {
  const [isFavorite, setIsFavorite] = React.useState(false);

  // to change into AllCocktails page
  const goToOneCocktailDetails = () => {
    // props.navigation.push('OneCocktailDetails');
  };

  return (
    <View style={styles.oneItem}>
      <View style={styles.image}>
        <Image style={styles.image}>
          {image}
        </Image>
      </View>
      <View>
        <Text>
          Name:
          {name}
        </Text>
        <Text>
          Principal ingredient:
          {principalIngredient}
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
            <Text>
              Genres:
              {category}
            </Text>
            <Text>
              Is alcoholic ?
              {alcochol}
            </Text>
            <Text>
              Type of Glass:
              {glass}
            </Text>
            <Text>
              Last modification:
              {modificationDate}
            </Text>
            <View>
              <TouchableOpacity
                onPress={() => (goToOneCocktailDetails)}
                title="OneCocktailDetails"
              >
                <Text style={styles.botttonDetails}>Recipe</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
