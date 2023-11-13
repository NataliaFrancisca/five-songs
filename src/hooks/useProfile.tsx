import { useEffect, useState } from "react"
import { UseToken } from "./useToken";

export const UseProfile = () => {
    const [userName, setUserName] = useState<string>();
    const [listSongs, setListSongs] = useState();

    const token = UseToken();

    async function onGetProfile() {
        try{
            const response = await fetch('https://api.spotify.com/v1/me', {
                headers: {
                  Authorization: 'Bearer ' + token
                }
              });

              const data = await response.json();
              return data.display_name;
        }catch(error: any){
            console.log('ERROR:', error?.message);
        }
    }

    async function onGetTopFive(){
        try{
            const response = await fetch('https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=5', {
                headers: {
                  Authorization: 'Bearer ' + token
                },
                method: 'GET',
            });
          
            const data = await response.json();
            return data.items;
        }catch(error: any){
            console.log('ERROR:', error?.message);
        }
    }

    async function fetchUserProfile(){
        const [name, list] = await Promise.all([onGetProfile(), onGetTopFive()]);
        setUserName(name);
        setListSongs(list);
    }

    useEffect(() => {
        fetchUserProfile();
    },[])

    return { userName, listSongs };
}