import PaperBackground from "@/app/ui/paper-background/paper-background";
import { NotebookSheetComponent } from "./notebook-sheet.css";
import { IPaperStyle } from "@/ts/interface";
import Songs from "../songs/songs";

const NotebookSheet = (props: {paperStyle: IPaperStyle }) => {
    console.log(props.paperStyle);

    return(
        <NotebookSheetComponent $paperTheme={props.paperStyle.style}>
            <PaperBackground />
            <Songs viewTheme={props.paperStyle.style}/>
        </NotebookSheetComponent>
    )
}

export default NotebookSheet;