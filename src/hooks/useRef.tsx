import { useRefContext } from "@/context/ref-context"
import { useEffect, useRef } from "react";

export const UseRefNotebook = () => {
    const refNotebook = useRef() as React.MutableRefObject<HTMLElement>;
    const { setRefContext } = useRefContext(); 

    useEffect(() => {
        setRefContext(refNotebook.current);
    },[setRefContext])

    return { refNotebook };
}