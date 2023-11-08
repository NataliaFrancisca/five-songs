'use client';
import { ViewComponent } from "./view.css";
import { PAPER_THEME } from "@/styles/theme.css";
import { getThemeCookie, setThemeCookie } from "@/storage/theme";
import Image from "next/image";
import Carousel from "../components/carousel/carousel";
import { useEffect, useState } from "react";
import { IPaperStyle } from "@/ts/interface";

const View = () => {
    const [currentElementStyle, setCurrentElementStyle] = useState<IPaperStyle>(); 
    
    const getTheme = () => {
        const response = getThemeCookie();

        if(response){
            return response;
        }else{
            setThemeCookie(PAPER_THEME[0]);
            getTheme();
        }
    }

    useEffect(() => {
        const response = getTheme();
        setCurrentElementStyle(response);
    },[])

    return(
        <ViewComponent>
            <button id="btn-download">
                <Image src="icon/download.svg" alt="icon download" width={20} height={20}/>
            </button>
            
            {currentElementStyle && <Carousel currentElement={currentElementStyle.id} />}
        
        </ViewComponent>
    )
}

export default View;
