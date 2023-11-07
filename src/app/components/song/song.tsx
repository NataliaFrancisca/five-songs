/* eslint-disable @next/next/no-img-element */
import { ImgHTMLAttributes, useEffect, useRef } from "react";
import { SongComponent } from "./song.css";
import { INumberColor, ISong } from "@/ts/interface";
import Number from "@/app/ui/number";


const Song = (obj: {song: ISong, colorInterface: INumberColor}) => {
    const {index, song_name, song_artist, img} = obj.song;

    return(
        <SongComponent>
            <Number index={index} color={obj.colorInterface} />

            <div className="group-artist-info">
                <h2 className="bold">{song_name}</h2>
                <h2>{song_artist}</h2>
            </div>
        </SongComponent>
    )
}

export default Song;