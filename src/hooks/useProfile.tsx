import { useEffect, useState } from "react"
import { UseToken } from "./useToken";
import { getUserProfile, getUserTopFive } from "@/auth/spotify-function";
import { useRouter } from "next/navigation";

export const UseProfile = () => {
    const [userName, setUserName] = useState<string>();
    const [listSongs, setListSongs] = useState([]);

    const token = UseToken();
    const router = useRouter();

    async function userProfile(){
        const response = await getUserProfile(token);
        
        console.log('response profile', response);

        if(response == 'The access token expired'){
            router.push("/");
            localStorage.removeItem('USER_TOKEN');
            return;
        }   

        setUserName(response.display_name);
    }

    async function userTopFive(){
        const response = await getUserTopFive(token);
        
        if(response == 'The access token expired'){
            router.push("/");
            localStorage.removeItem('USER_TOKEN');
            return;
        }

        setListSongs(response);
    }


    async function fetchUserProfile(){
        await Promise.all([userProfile(), userTopFive()]);
    }

    useEffect(() => {
        console.log("IS CALLED")
        fetchUserProfile();
    },[token])

    return { userName, listSongs };
}