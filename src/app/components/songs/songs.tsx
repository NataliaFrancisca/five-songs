'use client';
import Song from "../song/song";
import { ImageElement, SongsComponent } from "./songs.css";
import { IViewTheme } from "@/ts/interface";
const Songs = (obj: {viewTheme: IViewTheme}) => {

    // const convertHtmlToImage = () => {
    //     setHiddenAside(true);
    //     htmlToImageConvert(obj.viewRef);

    //     setTimeout(() => {
    //         setHiddenAside(false);
    //     },2000)
    // }

    return(
        <SongsComponent>

            <h1>my top five</h1>
            <br />
                <ImageElement 
                    $url="https://i.scdn.co/image/ab67616d00001e02b687c9cfd30d43f7762e8afb"
                    $stickerColor={obj.viewTheme.number_color.fill}
                 />
            <br />
           
            <Song colorInterface={obj.viewTheme.number_color} song={{index: 1, song_name: 'da lua', song_artist: 'Djonga, Veigh, LISBOA', img: 'images/song-cover-1.png'}} />
            <Song colorInterface={obj.viewTheme.number_color}  song={{index: 2, song_name: 'Mercado', song_artist: 'Terno Rei', img: 'images/song-cover-2.png'}} />
            <Song colorInterface={obj.viewTheme.number_color}  song={{index: 3, song_name: 'Another Love', song_artist: 'Marco McKinnis', img: 'images/song-cover-3.png'}} />
            <Song colorInterface={obj.viewTheme.number_color}  song={{index: 4, song_name: 'MONACO', song_artist: 'Bad Bunny', img: 'images/song-cover-4.png'}} />
            <Song colorInterface={obj.viewTheme.number_color}  song={{index: 5, song_name: 'Chorojô', song_artist: 'Os Tincõas', img: 'images/song-cover-5.png'}} />

        </SongsComponent>
    )
}

export default Songs;