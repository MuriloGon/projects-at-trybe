
export interface IMovie {
  title: string;
  subtitle: string;
  storyline: string;
  rating: number;
  imagePath: string;
  genre: string;
  bookmarked: boolean;
}

export interface IMovieLibrary {
  searchText: string;
  bookmarkedOnly: boolean;
  selectedGenre: string;
  movies: Array<IMovie>;
}
