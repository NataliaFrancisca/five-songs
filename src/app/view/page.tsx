'use client';
import { UseProfile } from "@/hooks/useProfile";
import Image from "next/image";
import { htmlToImageConvert } from "@/utils/convert-image";
import { ViewComponent } from "./view.css"
import Loader from "../ui/loader";
import { useRefContext } from "@/context/ref-context";
import { getTheme } from "@/utils/get-theme";
import Carousel from "../components/carousel/carousel";
import { useEffect, useState } from "react";
import { IPaperStyle } from "@/ts/interface";

const View = () => {
    const [theme, setTheme] = useState<IPaperStyle>();
    const { loading, notebookInfo} = UseProfile();
    const { refContext } = useRefContext();

    
    const convertHtmlToImage = async() => {
        await htmlToImageConvert(refContext);
    }

    useEffect(() => {
        const response_theme = getTheme();
        setTheme(response_theme);
    },[])

    return(
        <ViewComponent>
            {loading && <Loader $colorTheme={theme?.color}/>}

            {!loading && theme && notebookInfo &&
                <>
                    <button id="btn-download" onClick={() => convertHtmlToImage()}>
                        <Image src="icon/download.svg" alt="icon download" width={20} height={20}/>
                    </button>

                    <Carousel currentElement={theme.id} carouselData={notebookInfo}/>
                </>
            }

        </ViewComponent>
    )
}

export default View;