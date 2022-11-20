export interface IFilm {
    kinopoiskId?: number | undefined;
    filmId: string;
    imdbId: string | undefined;
    nameRu: string;
    nameEn: string;
    nameOriginal: string;
    countries: Array<object>;
    genres: Array<object>;
    posterUrl: string;
    posterUrlPreview: string;
    coverUrl: string;
    logoUrl: string;
    rating: number;
    reviewsCount: number;
    ratingGoodReview: number;
    ratingGoodReviewCount: number;
    ratingKinopoisk: number;
    ratingKinopoiskVoteCount: number;
    ratingImdb: number;
    ratingImdbVoteCount: number;
    year: number;
    filmLength: number;
    slogan: string;
    description: string;
    shortDescription: string;
    editorAnotation: string;
    ratingMpaa: string;
    ratingAgeLimits: string;
    serial: boolean;
    completed: boolean;
    premiere: string;
    duration?: number;
    type: string;
    staff: object;
}
