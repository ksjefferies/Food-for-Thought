const router = require('express').Router();

// Import any controllers needed here
const { createUser, authUser, verifyUser, getUserById, getAllUsers, addFavorite, deleteFavorite } = require('../../controllers/user-controller');


// Get routes for users
router.route('/').get(getAllUsers)
router.route('/:_id').get(getUserById)


// Declare the routes that point to the controllers above
router.route('/').post(createUser);
router.route('/auth').post(authUser);
router.route('/verify').post(verifyUser);

// /api/user/:userId/favorites/
router.route('/:_id/favorites').post(addFavorite)
// /api/user/:userId/favorites/favoriteID
router.route('/:_id/favorites/:id').delete(deleteFavorite);

module.exports = router;