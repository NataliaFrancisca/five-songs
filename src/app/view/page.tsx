'use client';
import Image from "next/image";
import { useEffect, useState } from "react";
import { htmlToImageConvert } from "@/utils/convert-image";
import { UseProfile } from "@/hooks/useProfile";
import { useRefContext } from "@/context/ref-context";
import { IPaperStyle } from "@/ts/interface";
import { getTheme } from "@/storage/theme";
import { ErrorMessageStyle, ViewComponent } from "./view.css"
import Carousel from "../components/carousel/carousel";
import Loader from "../ui/loader";

const View = () => {
    const [theme, setTheme] = useState<IPaperStyle>();
    const { errorMessage, loading, notebookInfo, navLogin} = UseProfile();
    const { refContext } = useRefContext();

    const convertHtmlToImage = async() => {
        await htmlToImageConvert(refContext);
    }

    const getUserTheme = async() => {
        const theme_response = await getTheme();
        setTheme(theme_response);
    }

    useEffect(() => {
        getUserTheme();
    },[])

    return(
        <ViewComponent>
            {loading && <Loader $colorTheme={theme?.color}/>}

            {errorMessage && 
                <ErrorMessageStyle>
                    <h1>{errorMessage}</h1>

                   <button onClick={() => navLogin()}>LOGIN</button>
                </ErrorMessageStyle>
            }

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