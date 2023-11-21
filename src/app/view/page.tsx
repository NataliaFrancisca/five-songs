'use client';
import { UseProfile } from "@/hooks/useProfile";
import Image from "next/image";
import { htmlToImageConvert } from "@/utils/convert-image";
import { ViewComponent } from "./view.css"
import { useEffect, useState } from "react";
import { IPaperStyle } from "@/ts/interface";
import Loader from "../ui/loader";
import { useRefContext } from "@/context/ref-context";
import { getTheme } from "@/utils/get-theme";
import Carousel from "../components/carousel/carousel";


const View = () => {
    const { loading, notebookInfo} = UseProfile();
    const [currentElementStyle, setCurrentElementStyle] = useState<IPaperStyle>(); 
    const { refContext } = useRefContext();

    const convertHtmlToImage = async() => {
        await htmlToImageConvert(refContext);
    }
    
    useEffect(() => {
        const response = getTheme();
        setCurrentElementStyle(response);
    },[])

    return(
        <ViewComponent>
            {loading && <Loader $colorTheme={currentElementStyle?.color}/>}

            {!loading && currentElementStyle && notebookInfo &&
                <>
                    <button id="btn-download" onClick={() => convertHtmlToImage()}>
                        <Image src="icon/download.svg" alt="icon download" width={20} height={20}/>
                    </button>

                    <Carousel currentElement={currentElementStyle.id} carouselData={notebookInfo}/>
                </>
            }

        </ViewComponent>
    )
}

export default View;