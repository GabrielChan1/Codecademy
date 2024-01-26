const express = require("express");
const { v4: uuidv4 } = require("uuid");
const router = express.Router();
const ALL_RESTAURANTS = require("./restaurants").restaurants;

/**
 * A list of starred restaurants.
 * In a "real" application, this data would be maintained in a database.
 */
let STARRED_RESTAURANTS = [
  {
    id: "a7272cd9-26fb-44b5-8d53-9781f55175a1",
    restaurantId: "869c848c-7a58-4ed6-ab88-72ee2e8e677c",
    comment: "Best pho in NYC",
  },
  {
    id: "8df59b21-2152-4f9b-9200-95c19aa88226",
    restaurantId: "e8036613-4b72-46f6-ab5e-edd2fc7c4fe4",
    comment: "Their lunch special is the best!",
  },
];

function joinStarredRestaurants() {
  return STARRED_RESTAURANTS.map(
    (starredRestaurant) => {
      const restaurant = ALL_RESTAURANTS.find(
        (restaurant) => restaurant.id === starredRestaurant.restaurantId
      );

      return {
        id: starredRestaurant.id,
        comment: starredRestaurant.comment,
        name: restaurant.name,
      };
    }
  );
}

/**
 * Feature 6: Getting the list of all starred restaurants.
 */
router.get("/", (req, res) => {
  /**
   * We need to join our starred data with the all restaurants data to get the names.
   * Normally this join would happen in the database.
   */
  const joinedStarredRestaurants = joinStarredRestaurants();

  res.json(joinedStarredRestaurants);
});

/**
 * Feature 7: Getting a specific starred restaurant.
 */
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const joinedStarredRestaurants = joinStarredRestaurants();

  const restaurant = joinedStarredRestaurants.find((restaurant) => restaurant.id === id);

  if (restaurant) {
    res.status(200).json(restaurant);
  }
  else {
    res.status(404).send('No restaurant with the given id exists.');
  }
});


/**
 * Feature 8: Adding to your list of starred restaurants.
 */
router.post('/', (req, res) => {
  const { id } = req.body;
  
  const restaurant = ALL_RESTAURANTS.find((restaurant) => restaurant.id === id);

  if (restaurant) {
    const newStarredRestaurant = {
      id: uuidv4(),
      restaurantId: restaurant.id,
      name: restaurant.name
    }
    STARRED_RESTAURANTS.push(newStarredRestaurant);
    res.status(200).json(newStarredRestaurant);
  }
  else {
    res.status(404).send('No restaurant with the given id exists.');
  }
})


/**
 * Feature 9: Deleting from your list of starred restaurants.
 */
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const previousLength = STARRED_RESTAURANTS.length;

  STARRED_RESTAURANTS = STARRED_RESTAURANTS.filter((restaurant) => restaurant.id !== id);

  if (STARRED_RESTAURANTS.length === previousLength) {
    res.status(404).send('No starred restaurant with the given id exists');
  }
  else {
    res.status(200).send('Starred restaurant successfully removed');
  }
})

/**
 * Feature 10: Updating your comment of a starred restaurant.
 */
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { newComment } = req.body;

  const restaurant = STARRED_RESTAURANTS.find((restaurant) => restaurant.id === id);

  if (restaurant) {
    restaurant.comment = newComment;
    res.status(200).send('Starred restaurant successfully updated');
  }
  else {
    res.status(404).send('No starred restaurant with the given id exists');
  }
});


module.exports = router;