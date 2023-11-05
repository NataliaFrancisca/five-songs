import Song from "../song/song";
import SwitchColor from "../switch-theme/switch-theme";
import { SongsComponent } from "./songs.css";
import { IViewTheme } from "@/ts/interface";

const Songs = (obj: {viewTheme: IViewTheme, updateView: () => void}) => {
    return(
        <SongsComponent>

            <aside>
                <SwitchColor updateView={obj.updateView} />
                
                <button>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 15L3.75 8.75L5.5 6.9375L8.75 10.1875V0H11.25V10.1875L14.5 6.9375L16.25 8.75L10 15ZM2.5 20C1.8125 20 1.22396 19.7552 0.734375 19.2656C0.244792 18.776 0 18.1875 0 17.5V13.75H2.5V17.5H17.5V13.75H20V17.5C20 18.1875 19.7552 18.776 19.2656 19.2656C18.776 19.7552 18.1875 20 17.5 20H2.5Z" fill={obj.viewTheme.text_color}/>
                    </svg>
                </button>
            </aside>
           

            <h1>my top five</h1>

            <br />

            <Song colorInterface={obj.viewTheme.number_color} song={{index: 1, song_name: 'da lua', song_artist: 'Djonga, Veigh, LISBOA', img: 'images/song-cover-1.png'}} />
            <br />
            <Song colorInterface={obj.viewTheme.number_color}  song={{index: 2, song_name: 'Mercado', song_artist: 'Terno Rei', img: 'images/song-cover-2.png'}} />
            <br />
            <Song colorInterface={obj.viewTheme.number_color}  song={{index: 3, song_name: 'Another Love', song_artist: 'Marco McKinnis', img: 'images/song-cover-3.png'}} />
            <br />
            <Song colorInterface={obj.viewTheme.number_color}  song={{index: 4, song_name: 'MONACO', song_artist: 'Bad Bunny', img: 'images/song-cover-4.png'}} />
            <br />
            <Song colorInterface={obj.viewTheme.number_color}  song={{index: 5, song_name: 'Chorojô', song_artist: 'Os Tincõas', img: 'images/song-cover-5.png'}} />

        </SongsComponent>
    )
}

export default Songs;