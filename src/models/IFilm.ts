export interface IFilm {
    'kinopoiskId': number;
    'nameRu': string;
    'nameEn': string;
    'year': number;
    'posterUrl': string;
    'posterUrlPreview': string;
    'countries': Array<object>;
    'genres': Array<object>;
    'duration': number;
    'premiere': string;
}