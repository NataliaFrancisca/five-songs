'use client';
import axios from "axios";

import { useQuery } from "react-query";
import { UseTheme } from "@/hooks/useTheme";
import { ViewComponentStyled } from "./view.css";
import { validateToken } from "@/utils/validate-token";
import { IAxiosError } from "@/ts/interface";

import ButtonDownload from "../components/btn-download/button-download";
import Carousel from "../components/carousel/carousel";
import Error from "../components/error/error";
import Loader from "../ui/loader";

const View = () => {
    const { theme } = UseTheme();

    const { data, isLoading, error } = useQuery('user_profile', async() => {
        const token = await validateToken();

        const [displayName, listSongs] = await Promise.all([
            axios.get("https://api.spotify.com/v1/me", {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            }).then(response => response.data.display_name),

            axios.get("https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=5", {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            }).then(response => response.data.items)
        ]);

        return { displayName, listSongs }
    }, {
        refetchOnWindowFocus: false
    })

    if(isLoading){
        return ( 
            <ViewComponentStyled>
                <Loader $colorTheme={theme?.color}/>
            </ViewComponentStyled>
        )   
    }

    if(error){
        const error_status = error as IAxiosError;
        const { status, message } = error_status.response.data.error;

        if(status != 200){
            return (
                <ViewComponentStyled>
                    <Error message={message} />
                </ViewComponentStyled>
            )
        }
    }

    return(
        <ViewComponentStyled>
            {theme && data &&
                <>
                    <ButtonDownload />
                    <Carousel currentElement={theme.id} carouselData={{userName: data.displayName, listSongs: data.listSongs}}/>
                </>
            }
        </ViewComponentStyled>
    )
}

export default View;