///roadmap
//1Click Login button
//2Redirect to Spotify login page
//3.Redirect to homepage once logged in

export const authEndpoint="https://accounts.spotify.com/authorize";
const redirectUri="http://localhost:3000/";
const clientId = "9441c5b06f114647b6a636170807860b";

export const getTokenFronUrl=()=>{
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial,item)=>{
        var parts=item.split("=");
        initial[parts[0]]=decodeURIComponent(parts[1]); return initial;
    },{});
}

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state"
];
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
