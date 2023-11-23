'use client';
import { LoginComponent } from "./login.css";
import loginSpotify from "@/auth/login";
import Image from "next/image";

const Login = () => {

    const onLogin = async() => {
        await loginSpotify();
    }

    return(
        <LoginComponent>
            <article className="box-login">

                <Image src="svg/logo.svg" alt="icon download" width={300} height={300}/>
                <h1>FIVE <br/> SONGS</h1>
                
                <h2>discover your top <span id="subtitle_styled">5</span></h2>
          
                <button onClick={() => onLogin()}>TRY WITH SPOTIFY</button>
            </article>
        </LoginComponent>
    )
}

export default Login;