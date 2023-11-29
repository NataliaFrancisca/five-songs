'use client';
import Image from "next/image";
import { useRouter } from "next/navigation";
import { htmlToImageConvert } from "@/utils/convert-image";
import { UseProfile } from "@/hooks/useProfile";
import { UseTheme } from "@/hooks/useTheme";
import { useRefContext } from "@/context/ref-context";
import { ErrorMessageStyle, ViewComponent } from "./view.css"
import Carousel from "../components/carousel/carousel";
import Loader from "../ui/loader";

const View = () => {
    const router = useRouter();

    const { theme } = UseTheme();
    const { errorMessage, loading, notebookInfo } = UseProfile();
    const { refContext } = useRefContext();

    const convertHtmlToImage = async() => {
        await htmlToImageConvert(refContext);
    }

    return(
        <ViewComponent>
            {loading && <Loader $colorTheme={theme?.color}/>}

            {errorMessage?.status == false && 
                <ErrorMessageStyle>
                    <h1>{errorMessage?.message}</h1>

                   <button onClick={() => router.push("/")}>LOGIN</button>
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