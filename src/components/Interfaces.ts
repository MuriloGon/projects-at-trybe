
export interface IMovie {
  title: string;
  subtitle: string;
  storyline: string;
  rating: number;
  imagePath: string;
  genre: string
}

export interface IMovieLibrary {
  searchText: string;
  bookmarkedOnly: boolean;
  selectedGenre: string;
  movies: Array<IMovie>;
}
