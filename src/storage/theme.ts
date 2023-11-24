'use server';
import { PAPER_THEME } from "@/styles/theme.css";
import { IPaperStyle } from "@/ts/interface";
import { cookies } from "next/headers";

export async function setTheme(theme: IPaperStyle){
    cookies().set('USER_THEME', JSON.stringify(theme));
}

export async function getTheme(){
    const cookie = cookies();
    const theme = cookie.get('USER_THEME');

    if(theme){
        return JSON.parse(theme.value);
    }else{
        setTheme(PAPER_THEME[0]);
        return await getTheme();
    }
}