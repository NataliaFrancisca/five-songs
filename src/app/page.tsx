'use client';
import { GlobalStyle } from "@/styles/global.css";
import Login from "./components/login/login";
import { getThemeCookie, setThemeCookie } from "@/storage/theme";

export default function Home() {

  const defaultTheme = {
      punched_color: '#16120F',
      paper_color: '#FDF6EC',
      text_color: '#1A1B1C',
      number_color: {
        fill: '#9974F8',
        stroke:'#16120F'
      }
  }

  const userThemer = getThemeCookie();

  if(!userThemer){
    setThemeCookie(defaultTheme, 'WHITE');
  }

  return (
    <>
      <GlobalStyle />
      <Login />
    </>
  )
}
