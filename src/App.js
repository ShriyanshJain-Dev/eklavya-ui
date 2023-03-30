import React, {useEffect} from "react";
import logo from './logo.svg';
import './App.css';
import { Routes } from "./Routes";
import {gapi} from "gapi-script";

function App() {

    useEffect(() => {
        function start() {
            gapi.auth2.init({
                clientId: "184991728615-1mp9d7lph7kpm9lg84fm0naf9atre5rh.apps.googleusercontent.com",
                scope: ""
            })
        }
        gapi.load('client:auth2',start);
    })

    return <Routes />; 
}

export default App;
