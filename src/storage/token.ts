'use server';
import { cookies } from 'next/headers';

export async function setToken(acessToken: string){
    const oneHour = 60 * 60 * 1000;
    cookies().set('USER_TOKEN', acessToken, { secure: true, expires: Date.now() + oneHour})
}

export async function getToken(){
    const cookie = cookies();
    const token = cookie.get('USER_TOKEN');
    return token?.value;
}

export async function removeToken(){
    const cookie = cookies();

    if(cookie.get("USER_TOKEN")){
        cookie.delete("USER_TOKEN");
    }
}