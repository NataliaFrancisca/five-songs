import Image from "next/image";
import { UseCarousel } from "@/hooks/useCarousel";
import { PAPER_THEME } from "@/styles/theme.css";
import NotebookSheet from "../notebook-sheet/notebook-sheet";

const Carousel = (props: {currentElement: number}) => {

    const { currentCarouselElement, onPrev, onNext } = UseCarousel(props.currentElement);

    return(
        <>
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
        </>
    )
}

export default Carousel;