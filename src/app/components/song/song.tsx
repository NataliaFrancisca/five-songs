import { ISong } from "@/ts/interface";
import { SongComponent } from "./song.css";

const Song = (obj: {song: ISong}) => {
    const {index, song_name, song_artist} = obj.song;

    const generate_h2_names = () => song_artist.map((artist) => artist.name).join(", ");

    return(
        <SongComponent>
            <h1>{index}</h1>

            <div id="song-titles">
                <h2 className="bold">{song_name}</h2>
                <h2 className="artist-name">{generate_h2_names()}</h2>
            </div>
        </SongComponent>
    )
}

export default Song;