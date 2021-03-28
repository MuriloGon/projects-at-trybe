/* eslint-disable max-lines-per-function */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

interface Props {
  searchText: string;
  onSearchTextChange: (text: string) => void;
  bookmarkedOnly: boolean;
  onBookmarkedChange: (condition: boolean) => void;
  selectedGenre: string;
  onSelectedGenreChange: (text: string) => void;
}

interface States {
  searchText: string;
  bookmarkedOnly: boolean;
  selectedGenre: string;
}
export class SearchBar extends React.Component<Props, States> {

  constructor(props: Props) {
    super(props);
    this.state = {
      searchText: props.searchText,
      bookmarkedOnly: props.bookmarkedOnly,
      selectedGenre: props.selectedGenre,
    }
  }

  readonly handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;
    this.props.onSearchTextChange(value);
    this.setState({searchText: value})
  }

  readonly handleBookmarkedChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.checked;
    this.props.onBookmarkedChange(value);
    this.setState({bookmarkedOnly: value})
  }

  readonly handleGenreChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const value = event.target.value;
    this.props.onSelectedGenreChange(value);
    this.setState({selectedGenre: value})
  }

  render(): JSX.Element {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const options = {
      Todos: '',
      Ação: 'action',
      Comédia: 'comedy',
      Suspense: 'thriller',
    };
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label">
          Inclui o texto
          <input
            type="text"
            data-testid="text-input"
            value={searchText}
            onChange={this.handleSearchChange}
          />
        </label>

        <label data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            type="checkbox"
            data-testid="checkbox-input"
            checked={bookmarkedOnly}
            onChange={this.handleBookmarkedChange}
          />
        </label>

        <label data-testid="select-input-label">
          Filtrar por gênero
          <select
            data-testid="select-input"
            value={selectedGenre}
            onChange={this.handleGenreChange}
          >
            {
              Object.entries(options).map(
                (op, i) => (
                  <option
                    data-testid="select-option"
                    key={i}
                    value={op[1]}
                  >
                    {op[0]}
                  </option>),
              )
            }
          </select>
        </label>
      </form>
    );
  }
}

export default SearchBar;
