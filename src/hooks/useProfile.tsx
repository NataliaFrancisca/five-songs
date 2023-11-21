import { useEffect, useState } from "react"
import { getUserProfile, getUserTopFive } from "@/auth/spotify-function";
import { useRouter } from "next/navigation";
import { getToken } from "@/auth/token";
import { INotebookInfo } from "@/ts/interface";

export const UseProfile = () => {
    const [notebookInfo, setNotebookInfo] = useState<INotebookInfo>();
    const [loading, setLoading] = useState(true);

    const router = useRouter();

    async function userProfile(token: string){
        const response = await getUserProfile(token);
        
        if(response == 'The access token expired'){
            router.push("/");
            localStorage.removeItem('USER_TOKEN');
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
            localStorage.removeItem('USER_TOKEN');
            return;
        }

        if(response == 'Invalid access token' && token){
            router.refresh();
            return;
        }

        return response;
    }

    async function fetchUserProfile(){
        const token = await getToken();
        const [userName, listSongs] = await Promise.all([userProfile(token), userTopFive(token)]);
        setNotebookInfo({userName, listSongs});
        setLoading(false);
    }

    useEffect(() => {
        console.log("IS CALLED")
        fetchUserProfile();
        console.log('loading', loading)
    },[])

    return { notebookInfo, loading };
}