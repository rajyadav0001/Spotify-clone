import "./App.css";
import Login from "./Login";
import React, { useEffect } from "react";
import './App.css'
import { getTokenFronUrl } from "./spotify";

function App() {
   /* {Run code based on a given condition} */
   useEffect(()=>{
    const token=getTokenFronUrl();
    window.location.hash="";
    console.log('I HAVE A TOKEN',token);

   },[])
  return (
    <div className="app">
  
      <Login />
     
    </div>
  );
}

export default App;
