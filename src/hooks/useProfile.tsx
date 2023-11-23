import { useEffect, useState } from "react"
import { getUserProfile, getUserTopFive } from "@/auth/spotify-function";
import { useRouter } from "next/navigation";
import { setUserToken } from "@/auth/token";
import { INotebookInfo } from "@/ts/interface";

export const UseProfile = () => {
    const [notebookInfo, setNotebookInfo] = useState<INotebookInfo>();
    const [loading, setLoading] = useState(true);

    const router = useRouter();


    async function userProfile(token: string){
        const response = await getUserProfile(token);
        
        if(response == 'The access token expired'){
            router.push("/");
            return;
        }   

        if(response == 'Invalid access token' && token){
            router.refresh();
            return;
        }
        
        return response.display_name;
    }

    async function userTopFive(token: string){
        const response = await getUserTopFive(token);
        
        if(response == 'The access token expired'){
            router.push("/");
            return;
        }

        if(response == 'Invalid access token' && token){
            router.refresh();
            return;
        }

        return response;
    }


    async function fetch_data(){
        const token_storage = localStorage.getItem("USER_TOKEN");

        if(token_storage){
            const [userName, listSongs] = await Promise.all([userProfile(token_storage), userTopFive(token_storage)]);
            setNotebookInfo({userName, listSongs});
            setLoading(false);
        }

        if(!token_storage){
            await setUserToken();
            router.refresh();
        }
    }

    useEffect(() => {
        fetch_data();
    },[])


    return { notebookInfo, loading };
}