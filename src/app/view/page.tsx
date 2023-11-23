'use client';
import { UseProfile } from "@/hooks/useProfile";
import Image from "next/image";
import { htmlToImageConvert } from "@/utils/convert-image";
import { ViewComponent } from "./view.css"
import Loader from "../ui/loader";
import { useRefContext } from "@/context/ref-context";
import { getTheme } from "@/utils/get-theme";
import Carousel from "../components/carousel/carousel";

const View = () => {
    const { loading, notebookInfo} = UseProfile();
    const { refContext } = useRefContext();

    const theme = getTheme();


    const convertHtmlToImage = async() => {
        await htmlToImageConvert(refContext);
    }

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