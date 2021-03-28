
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
  movies: IMovie | null;
}

// searchText: guarda o texto de busca por filmes;
// bookmarkedOnly: um boolean que guarda se é para filtrar por filmes favoritados ou não;
// selectedGenre: guarda o gênero do filme selecionado para poder fazer a filtragem;
// movies: guarda a lista de filmes