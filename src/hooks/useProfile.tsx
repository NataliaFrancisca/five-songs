import { useEffect, useState } from "react"
import { getUserProfile, getUserTopFive } from "@/auth/spotify-function";
import { useRouter } from "next/navigation";
import { setUserToken } from "@/auth/token";
import { INotebookInfo } from "@/ts/interface";
import { getToken } from "@/storage/token";

export const UseProfile = () => {
    const [notebookInfo, setNotebookInfo] = useState<INotebookInfo>();
    const [loading, setLoading] = useState(true);

    const router = useRouter();

    async function fetchData(){
        const result = await validateCurrentToken();

        if(result){
            const [userName, listSongs] = await Promise.all([getUserProfile(result), getUserTopFive(result)]);
            setNotebookInfo({userName: userName.display_name, listSongs});
            setLoading(false);
        }
    }

    async function validateCurrentToken(){
        const token_storage = await getToken();
        
        if(token_storage == undefined){
            console.log("1. getting data");
            await setUserToken();
        }

        if(token_storage == undefined && window.location.search){
            console.log("2. getting data and reload");
            await setUserToken();
            window.location.reload();
        }

        if(token_storage == undefined && window.location.search == ''){
            console.log("3. go home");
            router.push("/");
        }
        
        if(token_storage){
            const response = await getUserProfile(token_storage);

            switch(response){
                case 'The access token expired':
                    router.push("/");
                    break;
                case 'Invalid access token':
                    router.refresh();
                    break;
            }

            return token_storage;
        }    
    }

    useEffect(() => {
        fetchData();
    },[])


    return { notebookInfo, loading };
}