import { useEffect, useState } from "react"
import { getUserProfile, getUserTopFive } from "@/auth/spotify-function";
import { useRouter } from "next/navigation";
import { setUserToken } from "@/auth/token";
import { INotebookInfo } from "@/ts/interface";
import { getToken } from "@/storage/token";

export const UseProfile = () => {
    const [notebookInfo, setNotebookInfo] = useState<INotebookInfo>();
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState<string>();

    const router = useRouter();

    function navLogin(){
        router.push("/");
    }

    async function fetchData(){
        const result = await validateCurrentToken();

        if(result?.status){
            const [userName, listSongs] = await Promise.all([getUserProfile(result.message), getUserTopFive(result.message)]);
            setNotebookInfo({userName: userName.display_name, listSongs});
            setLoading(false);
        }

        if(!result?.status){
            setErrorMessage(result?.message);
        }

        setLoading(false);
    }

    async function validateCurrentToken():Promise<{ status: boolean; message: string; }>{
        const token_storage = await getToken();

        if(token_storage == undefined){
            await setUserToken();
            
            const generated_token = await getToken();

            if(generated_token){
                return {status: true, message: generated_token};
            }
        }

        if(token_storage == undefined && window.location.search == ''){
            console.log("3. go home");
            router.push("/");
        }
        
        if(token_storage){
            const response = await getUserProfile(token_storage);

            switch(response){
                case `Unexpected token 'U', "User not r"... is not valid JSON`:
                    return {status: false, message: "User is not registered in Developer Dashboard, please wait the final version."};
                case 'The access token expired':
                    return {status: false, message: "Token expired, please make login"};
                case 'Invalid access token':
                   return {status: false, message: "Something wrong, please reload the page"};
            }

            return {status: true, message: token_storage}
        }

        return {status: false, message: "Your token expired or it's not saved, please make login"};
    }

    useEffect(() => {
        fetchData();
    },[])


    return { errorMessage, notebookInfo, loading, navLogin };
}