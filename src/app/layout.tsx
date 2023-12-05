'use client';
import { QueryClient, QueryClientProvider } from "react-query";
import { RefContextProvider } from "@/context/ref-context";
import StyledComponentsRegistry from "../lib/registry";
import "../styles/font.css";
import { GlobalStyle } from "@/styles/global.css";
export default function RootLayout(props: React.PropsWithChildren) {
  const queryClient = new QueryClient();
  return (
    <html>
      <head>
        <title>FIVE SONGS</title>
      </head>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyle />
          <QueryClientProvider client={queryClient}>
            <RefContextProvider>
              {props.children}
            </RefContextProvider>
          </QueryClientProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}