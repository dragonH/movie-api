const router = require('express').Router();
const movieController = require('../controllers/movies.controller');

router.use('/movie', movieController);
module.exports = router;
