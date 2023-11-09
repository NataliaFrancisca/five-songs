import { IPaperStyle } from "@/ts/interface";
import { parseCookies, setCookie} from "nookies";

function setThemeCookie(theme: IPaperStyle){
    if(theme){
        setCookie(null, 'USER_THEME', JSON.stringify(theme), {
            maxAge: 86400 * 7,
            path: '/'
        });
    }
}


function getThemeCookie(){
    const { USER_THEME } = parseCookies();

    if(USER_THEME){
        return JSON.parse(USER_THEME);
    } else{
        console.log("Theme not found.");
        return false;
    }
}

export { setThemeCookie, getThemeCookie };