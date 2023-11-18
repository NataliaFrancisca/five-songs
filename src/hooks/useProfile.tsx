import { useEffect, useState } from "react"
import { getUserProfile, getUserTopFive } from "@/auth/spotify-function";
import { useRouter } from "next/navigation";
import { getToken } from "@/auth/token";

export const UseProfile = () => {
    const [userName, setUserName] = useState<string>();
    const [listSongs, setListSongs] = useState([]);

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

        setUserName(response.display_name);
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

        setListSongs(response);
    }

    async function fetchUserProfile(){
        const token = await getToken();
        if(token){
            await Promise.all([userProfile(token), userTopFive(token)]);
        }
    }

    useEffect(() => {
        console.log("IS CALLED")
        fetchUserProfile();
    },[])

    return { userName, listSongs };
}