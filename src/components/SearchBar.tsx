/* eslint-disable max-lines-per-function */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

interface Props {
  searchText?: string;
  onSearchTextChange?: () => void;
  bookmarkedOnly?: boolean;
  onBookmarkedChange?: () => void;
  selectedGenre?: string;
  onSelectedGenreChange?: () => void;
}
export class SearchBar extends React.Component<Props> {
  render(): JSX.Element {
    const { searchText, bookmarkedOnly, selectedGenre } = this.props;
    const { onSearchTextChange, onBookmarkedChange, onSelectedGenreChange } = this.props;

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
            value={ searchText }
            onChange={ onSearchTextChange }
          />
        </label>

        <label data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            type="checkbox"
            data-testid="checkbox-input"
            checked={ bookmarkedOnly }
            onChange={ onBookmarkedChange }
          />
        </label>

        <label data-testid="select-input-label">
          Filtrar por gênero
          <select
            data-testid="select-input"
            value={ selectedGenre }
            onChange={ onSelectedGenreChange }
          >
            {
              Object.entries(options).map(
                (op, i) => (
                  <option
                    data-testid="select-option"
                    key={ i }
                    value={ op[1] }
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
