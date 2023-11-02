'use client';
import { GlobalStyle } from "@/styles/global.css";
import Login from "./components/login/login";

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <Login />
    </>
  )
}
