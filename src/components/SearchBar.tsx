import { Component } from 'react';

interface IProps{
  searchText: string;
  onSearchTextChange: ()=>void;
  bookmarkedOnly: boolean;
  onBookmarkedChange: () => void;
  selectedGenre: string;
  onSelectedGenreChange: ()=>void;
}
class SearchBar extends Component<IProps> {
  render() {
    return 0;
  }
}

export default SearchBar;