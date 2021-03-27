import React from 'react';

interface IProps{
  searchText: string;
  onSearchTextChange: ()=>void;
  bookmarkedOnly: boolean;
  onBookmarkedChange: () => void;
  selectedGenre: string;
  onSelectedGenreChange: ()=>void;
}
class SearchBar extends React.Component<IProps> {
  render() {
    return (
      <form data-testid="search-bar-form">
      </form>
    );
  }
}

export default SearchBar;