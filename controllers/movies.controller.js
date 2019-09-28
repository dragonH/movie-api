const router = require('express').Router();
const moviesService = require('../services/movies.service');
const checkParamsHelper = require('../helpers/check-params.helper');

// Get Movies
router.get('/', async (req, res, next) => {
  try {
    const datas = req.query;
    const { date } = datas;
    const regexp = new RegExp(/^\d{4}-\d{2}-\d{2}$/);
    if (date && !date.match(regexp)) {
      res.status(400).send({ result: false, msg: 'Invalid date' }).end();
      return;
    }
    const movies = await moviesService.getMovies(datas);
    res.status(200).send({ result: true, movies }).end();
  } catch (err) {
    next(err);
  }
});

// Insert new movie
router.post('/', async (req, res, next) => {
  try {
    const datas = req.body;
    const paramsToCheck = ['ch_name', 'eng_name', 'expectation', 'intro', 'movie_id', 'poster_url', 'release_date'];
    const paramsCheckResult = await checkParamsHelper(datas, paramsToCheck);
    if (!paramsCheckResult) {
      res.status(400).send({ result: false, msg: 'Missing params' }).end();
      return;
    }
    const isMovieExist = await moviesService.getMovies(datas)
      .then((res) => res.length > 0);
    if (isMovieExist) {
      res.status(400).send({ result: false, msg: 'movie_id existed' }).end();
      return;
    }
    const insertNewMovieResult = await moviesService.insertNewMovie(datas);
    res
      .status(insertNewMovieResult ? 200 : 400)
      .send({ result: insertNewMovieResult })
      .end();
  } catch (err) {
    next(err);
  }
});

// Update movie
router.put('/', async (req, res, next) => {
  try {
    const datas = req.body;
    const paramsToCheck = ['movie_id'];
    const paramsCheckResult = await checkParamsHelper(datas, paramsToCheck);
    if (!paramsCheckResult) {
      res.status(400).send({ result: false, msg: 'movie_id required' }).end();
      return;
    }
    if (Object.keys(datas).length < 2) {
      res.status(400).send({ result: false, msg: 'Missing params' }).end();
      return;
    }
    const updateMovieResult = await moviesService.updateMovie(datas);
    if (!updateMovieResult.n) {
      res.status(400).send({ result: false, msg: 'Movie not exist' }).end();
      return;
    }
    res
      .status(updateMovieResult.nModified > 0 ? 200 : 400)
      .send({ result: updateMovieResult.nModified > 0 })
      .end();
  } catch (err) {
    next(err);
  }
});

module.exports = router;
