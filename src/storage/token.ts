'use server';
import { cookies } from 'next/headers';

export async function setToken(acessToken: string, refreshToken: string){
    const oneHour = 60 * 60 * 1000;
    cookies().set('USER_TOKEN', acessToken, {expires: Date.now() + oneHour})
    cookies().set('REFRESH_TOKEN', refreshToken, {expires: Date.now() + oneHour})
}

export async function getToken(){
    const cookie = cookies();
    const token = cookie.get('USER_TOKEN');
    return token?.value;
}

export async function getRefreshToken(){
    const cookie = cookies();
    const token = cookie.get('REFRESH_TOKEN');
    return token?.value;
}

export async function removeToken(){
    const cookie = cookies();

    if(cookie.get("USER_TOKEN")){
        cookie.delete("USER_TOKEN");
    }
}