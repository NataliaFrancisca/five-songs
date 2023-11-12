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
                <h1>FIVE <br/> SONGS</h1>
                
                <h2>discover your top <span id="subtitle_styled">5</span></h2>
          
                <button onClick={() => onNavigation()}>TRY WITH SPOTIFY</button>
            </article>
        </LoginComponent>
    )
}

export default Login;