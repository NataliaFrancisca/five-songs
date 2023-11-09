'use client';
import { ViewComponent } from "./view.css";
import Image from "next/image";
import Carousel from "../components/carousel/carousel";
import { useEffect, useState } from "react";
import { IPaperStyle } from "@/ts/interface";
import { htmlToImageConvert } from "@/utils/convert-image";
import { getTheme } from "@/utils/get-theme";
import { useRefContext } from "@/context/ref-context";

const View = () => {
    const [currentElementStyle, setCurrentElementStyle] = useState<IPaperStyle>(); 
    const { refContext } = useRefContext();

    const convertHtmlToImage = () => {
        htmlToImageConvert(refContext);
    }

    useEffect(() => {
        const response = getTheme();
        setCurrentElementStyle(response);
    },[])

    return(
        <ViewComponent>
            <button id="btn-download" onClick={() => convertHtmlToImage()}>
                <Image src="icon/download.svg" alt="icon download" width={20} height={20}/>
            </button>
            
            {currentElementStyle && <Carousel currentElement={currentElementStyle.id} />}
        </ViewComponent>
    )
}

export default View;
