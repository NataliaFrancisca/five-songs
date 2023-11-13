import { generateRandomString, sha256, base64encode } from "./crypto/crypto";

async function loginSpotify(){
    const client_id = process.env.NEXT_PUBLIC_CLIENT_ID;
    const redirect_uri = "http://localhost:3000/view";

    const scope = 'user-read-private user-read-email user-top-read';
    const authUrl = new URL("https://accounts.spotify.com/authorize")

    const codeVerifier  = generateRandomString(64);
    window.localStorage.setItem('code_verifier', codeVerifier);

    const hashed = await sha256(codeVerifier)
    const codeChallenge = base64encode(hashed);

    if(localStorage.getItem("USER_TOKEN")){
        localStorage.removeItem('USER_TOKEN');
    }

    if(client_id){
        const params =  {
            response_type: 'code',
            client_id: client_id,
            scope,
            code_challenge_method: 'S256',
            code_challenge: codeChallenge,
            redirect_uri: redirect_uri,
        }

        authUrl.search = new URLSearchParams(params).toString();
        window.location.href = authUrl.toString();
    }
}

export default loginSpotify;