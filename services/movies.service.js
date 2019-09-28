const moment = require('moment');
const moviesModel = require('../models/movie.model');

module.exports = {
  async getMovies(paramsData) {
    const query = [];
    const { date, movie_id } = paramsData;
    if (date) {
      const startDate = moment(date).startOf('isoWeek').format('YYYY-MM-DD');
      const endDate = moment(date).endOf('isoWeek').format('YYYY-MM-DD');
      query.push(
        { release_date: { $gte: startDate } },
        { release_date: { $lte: endDate } },
      );
    }
    if (movie_id) {
      query.push({ movie_id });
    }
    if (query.length === 0) {
      query.push({});
    }
    const movies = await moviesModel.getMovies(query);
    return movies;
  },
  async insertNewMovie(paramsData) {
    const {
      ch_name,
      eng_name,
      expectation,
      intro,
      movie_id,
      poster_url,
      release_date,
      trailer_url,
    } = paramsData;
    const newMovieData = {
      ch_name,
      eng_name,
      expectation,
      intro,
      movie_id,
      poster_url,
      release_date,
      trailer_url: trailer_url || '',
    };
    const insertNewMovieResult = await moviesModel.insertNewMovie(newMovieData);
    return insertNewMovieResult;
  },
  async updateMovie(paramsData) {
    const paramsDataToCheck = [
      'ch_name',
      'eng_name',
      'expectation',
      'intro',
      'poster_url',
      'release_date',
    ];
    const editedMovieData = {};
    paramsDataToCheck.forEach((params) => {
      if (typeof paramsData[params] !== 'undefined' && paramsData[params] !== '') {
        editedMovieData[params] = paramsData[params];
      }
    });
    const updateMovieResult = await moviesModel.updateMovie(paramsData.movie_id, editedMovieData);
    return updateMovieResult;
  },
};
