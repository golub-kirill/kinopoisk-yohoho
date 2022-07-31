import { IStaffList } from './IStaffList';


export interface IFilm {
    kinopoiskId?: number | undefined;
    imdbId?: string;
    nameRu?: string;
    nameEn?: string;
    nameOriginal?: string;
    countries?: Array<object>;
    genres?: Array<object>;
    posterUrl?: string;
    posterUrlPreview?: string;
    coverUrl?: string;
    logoUrl?: string;
    reviewsCount?: number;
    ratingGoodReview?: number;
    ratingGoodReviewCount?: number;
    ratingKinopoisk?: number;
    ratingKinopoiskVoteCount?: number;
    ratingImdb?: number;
    ratingImdbVoteCount?: number;
    ratingFilmCritics?: number;
    ratingFilmCriticsVoteCount?: number;
    ratingAvait?: number;
    ratingAvaitCount?: number;
    ratingRfCritics?: number;
    ratingRfCriticsVoteCount?: number;
    webUrl?: string;
    year?: number;
    filmLength?: number;
    slogan?: string;
    description?: string;
    shortDescription?: string;
    editorAnotation?: string;
    ratingMpaa?: string;
    ratingAgeLimit?: string;
    serial?: boolean;
    completed?: boolean;
    premiere?: string;
    duration?: number;
    staff?: IStaffList;
}
