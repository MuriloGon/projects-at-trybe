/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

interface Props {
  searchText: string;
  onSearchTextChange: () => void;
  bookmarkedOnly: boolean;
  onBookmarkedChange: () => void;
  selectedGenre: string;
  onSelectedGenreChange: () => void;
}
class SearchBar extends React.Component<Props> {
  render(): JSX.Element {
    const { searchText, bookmarkedOnly } = this.props;
    const { onSearchTextChange, onBookmarkedChange } = this.props;
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
      </form>
    );
  }
}

export default SearchBar;
