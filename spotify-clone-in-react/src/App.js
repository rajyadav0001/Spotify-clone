import "./App.css";
import Login from "./Login";
import React, { useEffect, useState } from "react";
import './App.css'
import { getTokenFronUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js"



const spotify =new SpotifyWebApi();


function App() {
  const[token,setToken]=useState(null);
   /* {Run code based on a given condition} */
   useEffect(()=>{
    const hash=getTokenFronUrl();
    window.location.hash="";
    const _token=hash.access_token;
    console.log('I HAVE A TOKEN',token);
    

    if(_token){
      setToken(_token)
    }

   },[]);
  return (
    <div className="app">{token ? <h1>I am logged in</h1> : <Login />}</div>
  );
}

export default App;
