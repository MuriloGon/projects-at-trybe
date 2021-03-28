import React, { Component } from 'react';
import SearchBar from './SearchBar';
import { IMovieLibrary, IMovie } from './Interfaces';
import MovieCard from './MovieCard';

interface IProps {
  movies: Array<IMovie>
}
class MovieLibrary extends Component<IProps, IMovieLibrary> {
  constructor(props: any) {
    super(props)
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies
    }
  }

  readonly onSearchChange = (text: string): void => {
    const value = text;
    console.log(value)
    this.setState({ searchText: value })
  }

  readonly onBookMarkedChange = (text: boolean): void => {
    const value = text;
    this.setState({ bookmarkedOnly: value })
  }

  readonly onSelecGenreChange = (text: string): void => {
    const value = text;
    this.setState({ selectedGenre: value })
  }

  render(): JSX.Element {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;

    return (
      <>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={this.onSearchChange}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={this.onBookMarkedChange}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={this.onSelecGenreChange}
        />
        {movies.map((x) => <MovieCard key={x.title+x.subtitle} movie={x}></MovieCard>)}
      </>
    );
  }
}

export default MovieLibrary;

