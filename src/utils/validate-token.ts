import { setUserToken } from "@/auth/token";
import { getToken } from "@/storage/token";

export async function validateToken(){
    const token_cookies = await getToken();

    if(!token_cookies){
        await setUserToken();

        const new_token_cookies = await getToken(); 

        if(new_token_cookies){
            return new_token_cookies;
        }
    }

    if(token_cookies){
        return token_cookies;
    }
}