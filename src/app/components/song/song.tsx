import { ISong } from "@/ts/interface";
import { SongComponent } from "./song.css";

const Song = (obj: {song: ISong}) => {
    const {index, song_name, song_artist} = obj.song;

    return(
        <SongComponent>
            <h1>{index}</h1>

            <div className="group-artist-info">
                <h2 className="bold">{song_name}</h2>
                <h2 className="artist-name">{song_artist.map((artist, key) => (
                    <span key={key}>{artist.name}</span>
                ))}
                </h2>
            </div>
        </SongComponent>
    )
}

export default Song;