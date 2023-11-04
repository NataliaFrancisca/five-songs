/* eslint-disable @next/next/no-img-element */
import { ImgHTMLAttributes, useEffect, useRef } from "react";
import { SongComponent } from "./song.css";
import { INumberColor, ISong } from "@/ts/interface";
import Number from "@/app/ui/number";


const Song = (obj: {song: ISong, colorInterface: INumberColor}) => {
    const {index, song_name, song_artist, img} = obj.song;

    return(
        <SongComponent>
            <Number index={obj.song.index} color={obj.colorInterface} />

            <div className="group-artist-info">
                <h2 className="bold">{song_name}</h2>
                <h2>{song_artist}</h2>
            </div>

            {/* <div>
                <h2>{song_name}</h2>
                <h2>{song_artist}</h2>
            </div>

            <img src={img} alt="artist image"/> */}
        </SongComponent>
    )
}

export default Song;