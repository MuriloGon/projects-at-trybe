import React, { Component } from 'react';
import SearchBar from './SearchBar';
import { IMovieLibrary, IMovie } from './Interfaces';
import { MovieList } from './MovieList';
import { AddMovie } from './AddMovie';
import 'bulma/css/bulma.min.css';
import './MovieLibrary.css';
interface IProps {
  movies: Array<IMovie>;
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

  readonly filterMovies = (): void => {
    const inputText = this.state.searchText
    let filterdMovies = this.props.movies;

    if (this.state.selectedGenre !== '') {
      filterdMovies = filterdMovies.filter((x) => {
        if (x.genre === this.state.selectedGenre) return true;
        return false;
      });
    }

    filterdMovies = filterdMovies.filter(
      (x) => {
        const title = x.title.toLowerCase();
        const subtitle = x.subtitle.toLowerCase();
        const storyline = x.storyline.toLowerCase();
        return ((
          title.includes(inputText)
          || subtitle.includes(inputText)
          || storyline.includes(inputText)))
      }
    );

    if (this.state.bookmarkedOnly) {
      filterdMovies = filterdMovies.filter((x) => x.bookmarked);
    }

    this.setState({ movies: filterdMovies });
  }

  readonly onSearchChange = (text: string): void => {
    const value = text;

    this.setState({ searchText: value }, () => this.filterMovies())
  }

  readonly onBookMarkedChange = (codition: boolean): void => {
    const value = codition;
    this.setState({ bookmarkedOnly: value }, () => this.filterMovies());
  }

  readonly onSelecGenreChange = (text: string): void => {
    const value = text;
    this.setState({ selectedGenre: value }, () => {
      this.filterMovies();
    });
  }

  readonly addNewEntry = (movie: IMovie): void => {
    this.props.movies.push(movie);
    this.filterMovies();
    this.setState({ movies: this.props.movies })
  }

  render(): JSX.Element {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;

    return (
      <div className="MovieLibrary container is-fullhd">
        <div className="left-side">
          <div className="left-wrapper">
            <h4 className="title is-4">Filtrar Filmes</h4>
            <SearchBar
              searchText={searchText}
              onSearchTextChange={this.onSearchChange}
              bookmarkedOnly={bookmarkedOnly}
              onBookmarkedChange={this.onBookMarkedChange}
              selectedGenre={selectedGenre}
              onSelectedGenreChange={this.onSelecGenreChange}
            />
            <hr/>
            <h4 className="title is-4">Adicionar Filme</h4>
            <AddMovie onClick={this.addNewEntry} />
          </div>
        </div>
        <div className="rigth-side">
          <MovieList movies={movies} />
        </div>
      </div>
    );
  }
}

export default MovieLibrary;

