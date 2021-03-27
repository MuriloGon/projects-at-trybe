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
  render(): React.ReactElement {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label">Inclui o texto:</label>
        <input
          type="text"
          data-testid="text-input"
          value={ searchText }
          onChange={ onSearchTextChange }
        />
      </form>
    );
  }
}

export default SearchBar;
