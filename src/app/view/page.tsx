'use client';
import { getThemeCookie } from "@/storage/theme";
import Songs from "../components/songs/songs";
import { ViewComponent } from "./view.css";
import { useEffect, useRef, useState } from "react";
import { IThemeJSON } from "@/ts/interface";

const View = () => {
    const viewRef = useRef<HTMLElement | null>(null);
    const [currentViewTheme, setCurrentViewTheme] = useState<IThemeJSON>();

    const onUpdateView = () => {
        const viewThemeResult = getThemeCookie();
        setCurrentViewTheme(viewThemeResult);
    }

    useEffect(() => {
        onUpdateView();
    },[])

    return( currentViewTheme &&
        <ViewComponent $theme={currentViewTheme.theme} ref={viewRef}>
            <div id="lines">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
            </div>

            <div id="punched-paper-column">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
            </div>
  
            {currentViewTheme && <Songs viewTheme={currentViewTheme.theme} updateView={onUpdateView} viewRef={viewRef.current}/>}
        </ViewComponent>
    )
}

export default View;