import { useRouter } from "next/navigation";
import { ErrorMessageStyle } from "./error.css";

const Error = (props: {message: string}) => {
    const router = useRouter();

    return(
        <ErrorMessageStyle>
            <span id="message-error">
                <h1><b>An error has occurred:</b></h1>
                <h1>{props.message}</h1>
            </span>
      
            <button onClick={() => router.push("/")}>LOGIN</button>
        </ErrorMessageStyle>
    )
}

export default Error;