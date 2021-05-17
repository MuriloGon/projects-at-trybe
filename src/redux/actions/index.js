import * as movieAPI from '../../services/movieAPI';

export const INITIAL_STATE_MOVIE = 'movies/initial_state';

export const ADD_MOVIE = 'movies/add';
export const EDIT_MOVIE = 'movies/edit';
export const REMOVE_MOVIE = 'movies/remove';
export const FAVORITE_MOVIE = 'movies/add-bookmark';
export const UNFAVORITE_MOVIE = 'movies/remove-bookmark';

export const LOADING = 'load/loading';
export const LOADED = 'load/loaded';

export const isLoading = () => ({ type: LOADING });
export const isLoaded = () => ({ type: LOADED });

export const initialState = () => async (dispatch) => {
  const setIntialState = (state) => ({
    type: INITIAL_STATE_MOVIE,
    payload: state,
  });
  dispatch(isLoading());
  movieAPI.getMovies()
    .then((movies) => { dispatch(setIntialState(movies)); })
    .then(() => { dispatch(isLoaded()); });
};

export const addMovie = (movieData) => async (dispatch) => {
  const addAction = (data) => ({
    type: ADD_MOVIE,
    payload: data,
  });
  dispatch(isLoading());
  await movieAPI.createMovie(movieData);
  dispatch(isLoaded());
  dispatch(addAction(movieData));
};

export const editMovie = (movieData) => async (dispatch) => {
  const editAction = {
    type: EDIT_MOVIE,
    payload: movieData,
  };
  dispatch(isLoading());
  await movieAPI.updateMovie(movieData);
  dispatch(isLoaded());
  dispatch(editAction);
};

export const removeMovie = (moveID) => async (dispatch) => {
  const removeAction = {
    type: REMOVE_MOVIE,
    payload: moveID,
  };

  await movieAPI.deleteMovie(moveID);
  dispatch(removeAction);
};

export const addFavorite = (id) => ({
  type: FAVORITE_MOVIE,
  payload: id,
});

export const removeFavorite = (id) => ({
  type: UNFAVORITE_MOVIE,
  payload: id,
});
