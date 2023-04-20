export interface IMovieData {
  id: number;
  original_title: string;
  release_date: string;
  adult: boolean;
  overview: string;
  vote_count: number;
}

export interface IPersonData {
  id: number;
  name: string;
  popularity: number;
  adult: boolean;
}