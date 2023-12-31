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

export interface INotebookInfo{
    userName: string;
    listSongs: Array<ISong>
}

export interface IAxiosError{
    response: {
        data: {
            error: {
                status: number;
                message: string;
            }
        }
    }
}