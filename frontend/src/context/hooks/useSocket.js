import React, {useEffect, useState} from 'react'
import {io} from "socket.io-client";

const URL = 'http://localhost:3000'; // Здесь в продакшене нужно другой адрес вбивать
const OPTS = {
    withCredentials: true
}

const socket = io(URL, OPTS);

function log(...str){
    // console.log("useSocket\n", ...str);
}

export default function useSocket(){
    const [isConnected, setIsConnected] = useState(socket.connected);

    useEffect(()=>{
        socket.on('connect', ()=>{
            setIsConnected(true);
            log(`socket.io: you connected with id: ${socket.id}`);
        });

        socket.on('disconnect', () => {
            setIsConnected(false);
            log(`socket.io: you disconnected`);
        });

        socket.on("connect_error", (err) => {
            setIsConnected(false)
            log("socket.io: connect_error", err.message); // prints the message associated with the error
        });

        return () => {
            socket.off('connect');
            socket.off('disconnect');
            //websocket.disconnect();
        };
    },  [])

    function reconnect(){
        log("RECONNECT");
        socket.disconnect();
        socket.connect();
    }

    return {
        isConnected,
        socket,
        reconnect,
    }
}

/*
▄───▄
█▀█▀█
█▄█▄█
─███──▄▄
─████▐█─█
─████───█
─▀▀▀▀▀▀▀
*/