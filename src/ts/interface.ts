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
    punched_color: string,
    paper_color: string,
    paper_line_color?: string,
    text_color: string,

    number_color: {
        fill: string,
        stroke: string
    }
}
export interface IPaperStyle{
    id: number,
    title: string,
    style: {
        punched_color: string,
        paper_color: string,
        text_color: string,
        number_color: {
            fill: string
            stroke:string
        }
    }
}