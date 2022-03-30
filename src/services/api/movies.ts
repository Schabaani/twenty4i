import mock_movies from '../../assets/__mock__/movies.json';
import {BASE_URL} from '../../config/constants';

const MOVIES_PATH = 'api?s=batman';

async function fetchMovies() {
  if (__DEV__) {
    return {error: false, carousels: mock_movies.carousels};
  }
  try {
    const moviesResponse = await fetch(`${BASE_URL}${MOVIES_PATH}`);
    if (moviesResponse.status !== 200) {
      return {error: false, carousels: []};
    }
    const movies = await moviesResponse.json();
    // Here we must movies. But it's schema is not like ours.
    return {error: false, carousels: []};
  } catch (e) {
    return {error: true};
  }
}

export {fetchMovies};
