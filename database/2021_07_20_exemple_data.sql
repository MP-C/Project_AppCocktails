INSERT INTO user (email, password, lastname, firstname, birthday) VALUES
('mp@crcarvalho', '12345678', 'carvalho', 'mario', '1988-02-29');

INSERT INTO cocktail (userId, cocktailName, glass, isAlcoholic, description, ingredient, recipe, vote, tags) VALUES
(1, 'mojito', 'highball', true, 'fresh, intense, fuited high suger', 'rum, sparkiling water, ice, sirop sugar,
lime, mint', '1/3 of run, 1/3 water, 1/3 ice, 1/2 lime, 15ml sugar, mint', 1, 'rum');

INSERT INTO cocktail (userId, cocktailName, glass, isAlcoholic, description, ingredient, recipe, vote, tags) VALUES
(1, 'caipirinha', 'lowball', true, 'fresh, intense, fuited high suger', 'cachaça, ice, sirop sugar, lime',
'1/2 of caipirinha, 1/2 ice, 1 lime, 20ml sugar', 1, 'caipirinha');

INSERT INTO ingredient (ingredientName, category, rare) VALUES ('mint', 'flavor', false);

INSERT INTO ingredientCocktail (ingredientId, cocktailId, quantity) VALUES (1,1,'5ml');

INSERT INTO favorite (userId, cocktailId, isFavorite) VALUES (1, 1, true);
INSERT INTO favorite (userId, cocktailId, isFavorite) VALUES (1, 2, true);

SELECT * FROM user;

SELECT * FROM cocktail;

SELECT * FROM ingredient;

SELECT * FROM favorite;

SELECT * FROM cocktail INNER JOIN favorite INNER JOIN user WHERE cocktail.id = cocktailID AND favorite.userId=user.id;
