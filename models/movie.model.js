const db = require('../config/database.config');

module.exports = {
  getMovies(query) {
    return new Promise((resolve, reject) => {
      const collection = db.get('movies');
      collection.find({ $and: query })
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  },
  insertNewMovie(newMovieData) {
    return new Promise((resolve, reject) => {
      const collection = db.get('movies');
      collection.insert(newMovieData)
        .then(() => resolve(true))
        .catch((err) => reject(err));
    });
  },
  updateMovie(movie_id, editedMovieData) {
    return new Promise((resolve, reject) => {
      const collection = db.get('movies');
      collection.update({ movie_id }, { $set: editedMovieData })
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  },
};
