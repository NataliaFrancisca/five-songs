import { getTheme } from "@/storage/theme";
import { IPaperStyle } from "@/ts/interface"
import { useEffect, useState } from "react"

export const UseTheme = () => {
    const [theme, setTheme] = useState<IPaperStyle>();

    const getUserTheme = async() => {
        const theme_response = await getTheme();
        setTheme(theme_response);
    }
    
    useEffect(() => {
        getUserTheme();
    },[])

    return { theme };
}