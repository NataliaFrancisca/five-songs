export interface ISong{
    index: number;
    song_name: string;
    song_artist: Array<{name: string}>;
}



export interface IPaperStyle{
    id: number,
    title: string,
    color: string;
}