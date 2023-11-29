import { useEffect, useState } from "react"
import { getUserProfile, getUserTopFive } from "@/auth/spotify-function";
import { INotebookInfo } from "@/ts/interface";
import { validateToken } from "@/utils/validate-token";

export const UseProfile = () => {
    const [notebookInfo, setNotebookInfo] = useState<INotebookInfo>();
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState<{status: boolean, message: string}>();

    async function fetchData(){
        const result_validate = await validateToken();

        if(result_validate?.status){
            const [userName, listSongs] = await Promise.all([getUserProfile(result_validate.message), getUserTopFive(result_validate.message)]);
            setNotebookInfo({userName: userName.display_name, listSongs});
        }

        setErrorMessage(result_validate);
        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    },[])

    return { errorMessage, notebookInfo, loading };
}