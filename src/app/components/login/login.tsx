/* eslint-disable @next/next/no-img-element */
'use client';
import { useRouter } from "next/navigation";
import { LoginComponent } from "./login.css";

const Login = () => {
    const router = useRouter();

    const onNavigation = () => {
        router.push("/view");
    }

    return(
        <LoginComponent>
            <article className="box-login">
                <img src="svg/five-songs.svg" alt="title" />
                <div className="message-login">
                    <p>discover your top</p>
                    <img src="svg/number-five.svg" alt="number 5" />
                </div>
                <button onClick={() => onNavigation()}>try with Spotify</button>
            </article>
        </LoginComponent>
    )
}

export default Login;