import { getUserProfile } from "@/auth/spotify-function";
import { setUserToken } from "@/auth/token";
import { getToken } from "@/storage/token";

export async function validateToken(){
    const token_cookies = await getToken();

    // se não existe token salvo, fazer a requisição de um e salvar no cookies
    if(token_cookies == undefined){
        await setUserToken();

        // agora pegar esse novo token e retornar para o usuário
        const new_token_cookies = await getToken(); 

        if(new_token_cookies){
            return {
                status: true,
                message: new_token_cookies,
            }
        }

        return {status: false, message: "We didn't find your token; please log in again"};
    }

    // agora se o token existir, vamos fazer a validação dele
    if(token_cookies){
        const response_profile = await getUserProfile(token_cookies);

        // caso tudo esteja ok, retornar esse token para fazer as novas requisições
        if(response_profile){
            return {status: true, message: token_cookies};
        }

        // caso não, fazer uma validação dos possíveis erros
        switch(response_profile){
            case `Unexpected token 'U', "User not r"... is not valid JSON`:
                return {status: false, message: "User is not registered in Developer Dashboard, please wait the final version."};
            case 'The access token expired':
                return {status: false, message: "Token expired, please log in again"};
            case 'Invalid access token':
                return {status: false, message: "Something wrong, please reload the page"};
            default:
                return {status: false, message: "Your token expired or it's not saved, please log in again"};
        }
    }
}