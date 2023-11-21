'use client';
import { RefContextProvider } from "@/context/ref-context";
import StyledComponentsRegistry from "../lib/registry";
import "../styles/font.css";
import { GlobalStyle } from "@/styles/global.css";
export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <html>
      <head>
        <title>FIVE SONGS</title>
      </head>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyle />
          <RefContextProvider>
            {props.children}
          </RefContextProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}