import Song from "../song/song";
import { SongsComponent } from "./songs.css";


const Songs = (obj: {numberColor: {fill: string, stroke: string}}) => {
    return(
        <SongsComponent>
            <button>
                <img src="icon/share.svg" />
            </button>

            <h1>my top five</h1>

            <br />

            <Song colorInterface={obj.numberColor} song={{index: 1, song_name: 'da lua', song_artist: 'Djonga, Veigh, LISBOA', img: '#'}} />
            <br />
            <Song colorInterface={obj.numberColor}  song={{index: 2, song_name: 'Mercado', song_artist: 'Terno Rei', img: '#'}} />
            <br />
            <Song colorInterface={obj.numberColor}  song={{index: 3, song_name: 'Another Love', song_artist: 'Marco McKinnis', img: '#'}} />
            <br />
            <Song colorInterface={obj.numberColor}  song={{index: 4, song_name: 'MONACO', song_artist: 'Bad Bunny', img: '#'}} />
            <br />
            <Song colorInterface={obj.numberColor}  song={{index: 5, song_name: 'Chorojô', song_artist: 'Os Tincõas', img: '#'}} />

        </SongsComponent>
    )
}

export default Songs;