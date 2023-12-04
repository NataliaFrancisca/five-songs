import Image from "next/image";
import { UseCarousel } from "@/hooks/useCarousel";
import { PAPER_THEME } from "@/styles/theme.css";
import PaperBackground from "@/app/ui/paper-background";
import Songs from "../songs/songs";
import { INotebookInfo } from "@/ts/interface";
import { UseRefNotebook } from "@/hooks/useRef";
import { NotebookSheetBG } from "@/app/view/view.css";
import { CarouselComponent } from "./carousel.css";

const Carousel = (props: {currentElement: number, carouselData: INotebookInfo}) => {

    const { userName, listSongs } = props.carouselData;
    const { currentCarouselElement, onPrev, onNext } = UseCarousel(props.currentElement);
    const { refNotebook } = UseRefNotebook();

    return(
        <CarouselComponent>
            <section id="carousel">
                <button onClick={() => onPrev()}>
                    <Image src="icon/arrow-left.svg" alt="icon download" width={10} height={18}/>
                </button>
                
                <NotebookSheetBG $paperTheme={PAPER_THEME[currentCarouselElement]} ref={refNotebook}>
                    <PaperBackground />

                    {listSongs.length > 0 
                        ? <Songs userName={userName} songsList={listSongs}/> 
                        : <h1 id="list-songs-empty">No songs here! Listen to songs to unlock the list</h1>
                    }
                </NotebookSheetBG>

                <button onClick={() => onNext()}>
                    <Image src="icon/arrow-right.svg" alt="icon download" width={10} height={18}/>
                </button>
            </section>

            <section id="carousel-mark">
                {PAPER_THEME.map((element) => (
                    element.id == currentCarouselElement ? <span key={element.id} className="current-page"/> : <span key={element.id} />
                ))}
            </section>
        </CarouselComponent>
    )
}

export default Carousel;