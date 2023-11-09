'use client';
import { GlobalStyle } from "@/styles/global.css";
import Login from "./components/login/login";
import { getThemeCookie, setThemeCookie } from "@/storage/theme";
import { PAPER_THEME } from "@/styles/theme.css";

export default function Home() {

  const userThemer = getThemeCookie();

  if(!userThemer){
    setThemeCookie(PAPER_THEME[0]);
  }

  return (
    <>
        <Login />
    </>
  )
}
