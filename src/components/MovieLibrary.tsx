import React, {Component} from 'react';
import {IMovieLibrary, IMovie} from './Interfaces';

interface IProps {
  movies: Array<IMovie> | null
}
class MovieLibrary extends Component<IProps, IMovieLibrary> {
  constructor(props: any){
    super(props)
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies
    }
  }

  render(): JSX.Element {
    return (<div>MovieLibrary</div>);
  }
}

export default MovieLibrary;

