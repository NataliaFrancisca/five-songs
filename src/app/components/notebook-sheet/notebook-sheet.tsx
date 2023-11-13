'use client';
import { NotebookSheetComponent } from "./notebook-sheet.css";
import { IPaperStyle } from "@/ts/interface";
import Songs from "../songs/songs";
import PaperBackground from "@/app/ui/paper-background";
import { useEffect, useRef } from "react";
import { useRefContext } from "@/context/ref-context";

const NotebookSheet = (props: {paperStyle: IPaperStyle }) => {
    
    const ref = useRef() as React.MutableRefObject<HTMLElement>;
    const { setRefContext } = useRefContext();

    useEffect(() => {
        setRefContext(ref.current);
    },[setRefContext])

    return(
        <NotebookSheetComponent $paperTheme={props.paperStyle} ref={ref}>
            <PaperBackground />
            <Songs />
        </NotebookSheetComponent>
    )
}

export default NotebookSheet;