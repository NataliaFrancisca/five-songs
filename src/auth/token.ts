export async function getUserToken(){
    let code_verifier_storage = localStorage.getItem('code_verifier');

    const urlParams = new URLSearchParams(window.location.search);
    let code = urlParams.get('code');

    const client_id = process.env.NEXT_PUBLIC_CLIENT_ID;
    const redirect_uri = process.env.NEXT_PUBLIC_URI_REDIRECT;

    if(client_id && redirect_uri && code_verifier_storage && code){
        const payload = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
              client_id: client_id,
              grant_type: 'authorization_code',
              code,
              redirect_uri: redirect_uri,
              code_verifier: code_verifier_storage,
            }),
        }

        const body = await fetch("https://accounts.spotify.com/api/token", payload)
        const response = await body.json();

        if(response.access_token){
          window.localStorage.setItem('USER_TOKEN', JSON.stringify(response.access_token));
          window.localStorage.setItem('USER_REFRESH_TOKEN', JSON.stringify(response.refresh_token));
        }
    }
}

export async function getRefreshToken(){
  const refreshToken = localStorage.getItem('refresh_token');
  const url = "https://accounts.spotify.com/api/token";

  const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;

  if(clientId && refreshToken){
    const payload = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
        client_id: clientId
      }),
    }

    const body = await fetch(url, payload);
    const response = await body.json();

    if(response){
      localStorage.setItem('USER_TOKEN', JSON.stringify(response.access_token));
      localStorage.setItem('USER_REFRESH_TOKEN', JSON.stringify(response.refresh_token));
    }
  }
}
