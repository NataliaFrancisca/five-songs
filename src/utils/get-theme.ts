import { getThemeCookie, setThemeCookie } from "@/storage/theme";
import { PAPER_THEME } from "@/styles/theme.css";

export const getTheme = () => {
    const response = getThemeCookie();

    if(response){
        return response;
    }else{
        setThemeCookie(PAPER_THEME[0]);
        getTheme();
    }
}