'use client';
import Song from "../song/song";
import { ImageElement, SongsComponent } from "./songs.css";
const Songs = (props: {userName: string; songsList: Array<any>}) => {

    const top_one_album_cover = props.songsList[0].album.images[0].url;

    return(
        <SongsComponent>

            <div id="user-title">
                <h1 id="user-title_wrapper">{props.userName}</h1>
                <h1>top 5</h1>
            </div>

            <br />
            <ImageElement>
                <img src="svg/sticker.svg" className="sticker-img"/>
                    <img src={top_one_album_cover} id="album-cover-img" />
                <img src="svg/sticker.svg" className="sticker-img"/>
            </ImageElement>
        
            <br />

            {props.songsList.map((song, index) => (
                <Song key={index} song={{index: index+1, song_name: song.name, song_artist: song.artists}} />
            ))}
           
        </SongsComponent>
    )
}

export default Songs;