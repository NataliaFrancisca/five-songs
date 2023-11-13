'use client';
import { LoginComponent } from "./login.css";
import loginSpotify from "@/auth/login";

const Login = () => {

    const onLogin = async() => {
        await loginSpotify();
    }

    return(
        <LoginComponent>
            <article className="box-login">
                <h1>FIVE <br/> SONGS</h1>
                
                <h2>discover your top <span id="subtitle_styled">5</span></h2>
          
                <button onClick={() => onLogin()}>TRY WITH SPOTIFY</button>
            </article>
        </LoginComponent>
    )
}

export default Login;