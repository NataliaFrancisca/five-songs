import { setThemeCookie } from "@/storage/theme";
import { PAPER_THEME } from "@/styles/theme.css";
import { useState } from "react";

export const UseCarousel = (currentElement: number) => {
    const [currentCarouselElement, setCurrentCarouselElement] = useState<number>(currentElement);

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

    return { currentCarouselElement, onPrev, onNext }
}