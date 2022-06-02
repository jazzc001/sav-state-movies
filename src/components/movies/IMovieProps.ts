export interface IMovieProps {
    id: number;
    name: string;
    image: {
        medium: string;
    };
    url: string;
    summary: string;
    status: string;
    genres: [string];
    
}
