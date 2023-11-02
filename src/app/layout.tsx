'use client';
import StyledComponentsRegistry from "../lib/registry";
import { GlobalStyle } from "@/styles/global.css";

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <html>
      <head>
        <title>TOP FIVE</title>
      </head>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyle />
          {props.children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}