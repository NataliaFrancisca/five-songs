'use client';
import { useEffect, useState } from "react";
import { ViewComponent } from "./view.css";
import NotebookSheet from "../components/notebook-sheet/notebook-sheet";
import { PAPER_THEME } from "@/styles/theme.css";
import { getThemeCookie, setThemeCookie } from "@/storage/theme";

const View = () => {
    const user_theme = getThemeCookie();
    const [currentCarouselElement, setCurrentCarouselElement] = useState(user_theme.id);

    const onPrev = () => {
        if(currentCarouselElement == 0){
            return;
        }

        setCurrentCarouselElement(currentCarouselElement - 1);
        setThemeCookie(PAPER_THEME[currentCarouselElement - 1]);
    }

    const onNext = () => {
        if(currentCarouselElement == PAPER_THEME.length - 1){
            return;
        }

        setCurrentCarouselElement(currentCarouselElement + 1);
        setThemeCookie(PAPER_THEME[currentCarouselElement + 1]);
    }

    console.log(currentCarouselElement);

    return(
        <ViewComponent>
             <button id="btn-download">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 15L3.75 8.75L5.5 6.9375L8.75 10.1875V0H11.25V10.1875L14.5 6.9375L16.25 8.75L10 15ZM2.5 20C1.8125 20 1.22396 19.7552 0.734375 19.2656C0.244792 18.776 0 18.1875 0 17.5V13.75H2.5V17.5H17.5V13.75H20V17.5C20 18.1875 19.7552 18.776 19.2656 19.2656C18.776 19.7552 18.1875 20 17.5 20H2.5Z" fill='#D9D9D9'/>
                </svg>
            </button>

            <section id="carousel">
                <button onClick={() => onPrev()} disabled={currentCarouselElement == 0}>
                    <svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.99955 0.0167977L11.7913 1.7749L3.64458 10.0775L11.9471 18.2242L10.189 20.0159L0.094736 10.1111L9.99955 0.0167977Z"/>
                    </svg>
                </button>
                
                <NotebookSheet paperStyle={PAPER_THEME[currentCarouselElement]} />

                <button onClick={() => onNext()} disabled={currentCarouselElement == (PAPER_THEME.length - 1)}>
                    <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.775 20L0 18.225L8.225 10L0 1.775L1.775 0L11.775 10L1.775 20Z"/>
                    </svg>
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