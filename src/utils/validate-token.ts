import { setUserToken } from "@/auth/token";
import { getToken } from "@/storage/token";

export async function validateToken(){
    const token_cookies = await getToken();

    if(token_cookies == undefined){
        await setUserToken();
        const new_token = await getToken();

        if(new_token){
            return new_token;
        }
    }

    return token_cookies;
}