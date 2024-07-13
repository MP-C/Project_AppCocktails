CREATE TABLE `user` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `birthday` DATE,
  `subscription_date` DATE DEFAULT (now())
);

CREATE TABLE `cocktail` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `userId` INT NOT NULL,
  `cocktailName` varchar(255) NOT NULL,
  `glass` varchar(255) NOT NULL,
  `isAlcoholic` boolean,
  `description` text,
  `ingredient` varchar(255) NOT NULL,
  `recipe` text,
  `vote` INT,
  `tags` varchar(255) NOT NULL,
  `dateModified` DATE DEFAULT (now())
);

CREATE TABLE `ingredient` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `ingredientName` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `rare` boolean,
  `creation_date` DATE DEFAULT (now())
);

CREATE TABLE `favorite` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `userId` INT NOT NULL,
  `cocktailId` INT NOT NULL,
  `isFavorite` boolean,
  `subscription_date` DATE DEFAULT (now())
);

CREATE TABLE `ingredientCocktail` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `ingredientId` INT NOT NULL,
  `cocktailId` INT NOT NULL,
  `quantity` varchar(255) NOT NULL
);

ALTER TABLE `cocktail` ADD FOREIGN KEY (`userId`) REFERENCES `user` (`id`);

ALTER TABLE `ingredientCocktail` ADD FOREIGN KEY (`cocktailId`) REFERENCES `cocktail` (`id`);

ALTER TABLE `ingredientCocktail` ADD FOREIGN KEY (`ingredientId`) REFERENCES `ingredient` (`id`);

ALTER TABLE `favorite` ADD FOREIGN KEY (`cocktailId`) REFERENCES `cocktail` (`id`);

ALTER TABLE `favorite` ADD FOREIGN KEY (`userId`) REFERENCES `user` (`id`);

/*

CREATE TABLE `stockInFuture` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `cocktailAPI` varchar(255) NOT NULL,
  `ingredientId` varchar(255) NOT NULL
);

ALTER TABLE `stockInFuture` ADD FOREIGN KEY (`ingredientId`) REFERENCES `ingredient` (`id`);

*/
