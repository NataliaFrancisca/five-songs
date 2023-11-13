'use client';
import { NotebookSheetComponent } from "./notebook-sheet.css";
import { IPaperStyle } from "@/ts/interface";
import Songs from "../songs/songs";
import PaperBackground from "@/app/ui/paper-background";
import { useEffect, useRef } from "react";
import { useRefContext } from "@/context/ref-context";
import { UseProfile } from "@/hooks/useProfile";

const NotebookSheet = (props: {paperStyle: IPaperStyle }) => {
    
    const ref = useRef() as React.MutableRefObject<HTMLElement>;
    const { userName, listSongs } = UseProfile();
    const { setRefContext } = useRefContext();

    useEffect(() => {
        setRefContext(ref.current);
    },[setRefContext])


    return(
        <NotebookSheetComponent $paperTheme={props.paperStyle} ref={ref}>
            <PaperBackground />
            {userName && listSongs && <Songs userName={userName} songsList={listSongs}/> }
        </NotebookSheetComponent>
    )
}

export default NotebookSheet;