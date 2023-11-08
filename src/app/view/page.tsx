'use client';
import { useState } from "react";
import { ViewComponent } from "./view.css";
import { PAPER_THEME } from "@/styles/theme.css";
import { getThemeCookie, setThemeCookie } from "@/storage/theme";

import NotebookSheet from "../components/notebook-sheet/notebook-sheet";
import Image from "next/image";

const user_theme = getThemeCookie();

const View = () => {
    const [currentCarouselElement, setCurrentCarouselElement] = useState(user_theme.id);

    const onPrev = () => {
        if(currentCarouselElement == 0){
            setCurrentCarouselElement(PAPER_THEME.length - 1);
            setThemeCookie(PAPER_THEME[PAPER_THEME.length - 1]);
            return;
        }

        setCurrentCarouselElement((prev:number) => prev - 1);
        setThemeCookie(PAPER_THEME[currentCarouselElement - 1]);
    }

    const onNext = () => {
        if(currentCarouselElement == PAPER_THEME.length - 1){
            setCurrentCarouselElement(0);
            setThemeCookie(PAPER_THEME[0]);
            return;
        }

        setCurrentCarouselElement((prev:number) => prev + 1);
        setThemeCookie(PAPER_THEME[currentCarouselElement + 1]);
    }

    return(
        <ViewComponent>
             <button id="btn-download">
                <Image src="icon/download.svg" alt="icon download" width={20} height={20}/>
            </button>

            <section id="carousel">
                <button onClick={() => onPrev()}>
                    <Image src="icon/arrow-left.svg" alt="icon download" width={10} height={18}/>
                </button>
                
                <NotebookSheet paperStyle={PAPER_THEME[currentCarouselElement]} />

                <button onClick={() => onNext()}>
                    <Image src="icon/arrow-right.svg" alt="icon download" width={10} height={18}/>
                </button>
            </section>

            <section id="carousel-mark">
                {PAPER_THEME.map((element) => (
                    element.id == currentCarouselElement ? <span key={element.id} className="current-page"/> : <span key={element.id} />
                ))}
            </section>
   
        </ViewComponent>
    )
}

export default View;