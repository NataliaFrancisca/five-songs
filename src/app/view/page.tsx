'use client';
import { ViewComponent } from "./view.css";
import { PAPER_THEME } from "@/styles/theme.css";
import { getThemeCookie, setThemeCookie } from "@/storage/theme";
import Image from "next/image";
import Carousel from "../components/carousel/carousel";

const View = () => {
    
    const getTheme = () => {
        const response = getThemeCookie();

        if(response){
            return response;
        }else{
            setThemeCookie(PAPER_THEME[0]);
            getTheme();
        }
    }

    const response = getTheme();

    return(
        <ViewComponent>
            <button id="btn-download">
                <Image src="icon/download.svg" alt="icon download" width={20} height={20}/>
            </button>
            
            {response && <Carousel currentElement={response.id} />}
        
        </ViewComponent>
    )
}

export default View;
