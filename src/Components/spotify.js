
export const authEndPoint = 
"https://accounts.spotify.com/authorize";

const redirectURI = "http://localhost:3000/";

const clientId =  "df3fa9d61c9a4c6e83fda156bcbea89d";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];



export const getTokenFromURL = () =>{
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((acc,val) =>{
            var parts = val.split('=')
            acc[parts[0]] = decodeURIComponent(parts[1])

            return acc
        }, {});
}

export const loginURL = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectURI}&scope${scopes.join(
    "%20"
    )}&response_type=token&show_dialog=true`;