'use client';
import Song from "../song/song";
import { ImageElement, SongsComponent } from "./songs.css";
const Songs = () => {
    return(
        <SongsComponent>

            <h1 id="user-title">my top five</h1>
            <br />
            <ImageElement>
                <img src="svg/sticker.svg" className="sticker-img"/>
                    <img src="https://i.scdn.co/image/ab67616d00001e02b687c9cfd30d43f7762e8afb" id="album-cover-img" />
                <img src="svg/sticker.svg" className="sticker-img"/>
            </ImageElement>
        
            <br />
           
            <Song song={{index: 1, song_name: 'da lua', song_artist: 'Djonga, Veigh, LISBOA', img: 'images/song-cover-1.png'}} />
            <Song song={{index: 2, song_name: 'Mercado', song_artist: 'Terno Rei', img: 'images/song-cover-2.png'}} />
            <Song song={{index: 3, song_name: 'Another Love', song_artist: 'Marco McKinnis', img: 'images/song-cover-3.png'}} />
            <Song song={{index: 4, song_name: 'MONACO', song_artist: 'Bad Bunny', img: 'images/song-cover-4.png'}} />
            <Song song={{index: 5, song_name: 'Chorojô', song_artist: 'Os Tincõas', img: 'images/song-cover-5.png'}} />

        </SongsComponent>
    )
}

export default Songs;