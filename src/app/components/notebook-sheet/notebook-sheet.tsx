import { NotebookSheetComponent } from "./notebook-sheet.css";
import { IPaperStyle } from "@/ts/interface";
import Songs from "../songs/songs";
import PaperBackground from "@/app/ui/paper-background/paper-background";

const NotebookSheet = (props: {paperStyle: IPaperStyle }) => {

    return(
        <NotebookSheetComponent $paperTheme={props.paperStyle.style}>
            <PaperBackground />
            <Songs viewTheme={props.paperStyle.style}/>
        </NotebookSheetComponent>
    )
}

export default NotebookSheet;