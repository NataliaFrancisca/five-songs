export async function getUserProfile(token: string){
    try{
        const response = await fetch('https://api.spotify.com/v1/me', {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });

        if(!response.ok){
            const error_type = await response.json();
            throw error_type.error;
        }

        return await response.json();
    }catch(error: any){
        return error.message;
    } 
}

export async function getUserTopFive(token: string){
    try{
        const response = await fetch('https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=5', {
            headers: {
              Authorization: 'Bearer ' + token
            },
            method: 'GET',
        });
      
        const data = await response.json();
        return data.items;
    }catch(error: any){
        console.log('ERROR:', error?.message);
    }
}