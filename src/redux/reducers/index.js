import { combineReducers } from 'redux';
import { ADD_MOVIE, EDIT_MOVIE, REMOVE_MOVIE,
  FAVORITE_MOVIE, UNFAVORITE_MOVIE, INITIAL_STATE_MOVIE, LOADING, LOADED } from '../actions';

const movies = (state = [], action) => {
  switch (action.type) {
  case INITIAL_STATE_MOVIE:
    return action.payload;

  case ADD_MOVIE: {
    const nextId = state[state.length - 1].id + 1;
    const newMovie = { id: nextId, ...action.payload };
    return [...state, newMovie];
  }

  case EDIT_MOVIE: {
    const filteredMovies = state.filter(({ id }) => id !== action.payload.id);
    const output = [...filteredMovies, action.payload]
      .sort(({ id: idA }, { id: idB }) => idA - idB);
    return output;
  }

  case REMOVE_MOVIE:
    return state.filter(({ id }) => Number(id) !== Number(action.payload));

  case FAVORITE_MOVIE: {
    const movie = state.find(({ id }) => id === action.payload);
    movie.bookmarked = true;
    return [...state, movie];
  }

  case UNFAVORITE_MOVIE: {
    const movie = state.find(({ id }) => id === action.payload);
    movie.bookmarked = false;
    return [...state, movie];
  }

  default:
    return state;
  }
};

const loading = (state = false, action) => {
  switch (action.type) {
  case LOADING: return true;
  case LOADED: return false;
  default: return state;
  }
};

const rootReducer = combineReducers({ movies, loading });

export default rootReducer;
