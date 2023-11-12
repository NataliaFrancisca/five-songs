export interface INumberColor{
    fill: string,
    stroke: string
}

export interface ISong{
    index: number;
    song_name: string;
    song_artist: string;
    img: string;
}

export interface IViewTheme{
    primary_color: string;
    secondary_color: string;
    text_color?:  string;
    paper_color: string;
    paper_line_color?: string;
    fill: string;
    stroke: string;
}


export interface IPaperStyle{
    id: number,
    title: string,
    style: IViewTheme
}