import { useEffect, useState } from "react"
import { getUserToken } from "@/auth/token";

export const UseToken = () => {

    const onGetToken = async() => {
        try{
            await getUserToken();
        }catch(error: any){
            console.log(error?.message);
        }
    }

    const currentToken = localStorage.getItem("USER_TOKEN");

    if(currentToken){
        return JSON.parse(currentToken);
    }else{
        onGetToken();
    }
}