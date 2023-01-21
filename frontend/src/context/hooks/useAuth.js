import React, {useEffect, useState} from 'react';
import useFetch from "../../hooks/useFetch";

export default function useAuth({ socket, isConnected }){
    const [user, setUserState] = useState();
    const [userLoading, setUserLoading] = useState(true);


    useEffect(()=>{
        socket.on("connect_error", setUser);
    }, [])

    useEffect(()=>{
        if(isConnected)
            whoami();
    }, [isConnected])

    useEffect(()=>{
        console.log('User', `\nisAuthenticated: ${isAuthenticated()}`, '\nuser:', user);
    }, [user])


    function setUser(obj){
        setUserLoading(false)
        setUserState(obj)
    }

    function userFetch(url, opt={}){
        setUserLoading(true);

        if(opt.body && typeof opt.body !== 'string') {
            opt.body = JSON.stringify(opt.body);
        }

        fetch(url, {
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            ...opt
        })
            .then(res=>res.json())
            .then(setUser)
            .catch(setUser);
    }


    const login = (body) => userFetch('/auth/login', {method: 'POST', body})

    const register = (body) => userFetch('/auth/register', {method: 'POST', body})

    const logout = () => userFetch('/auth/logout', {method: 'DELETE'})

    const whoami = () => {
        setUserLoading(true)
        // Метод дожидается пока socket подключится, поэтому не нужна проверка isConnected
        socket.emit('whoami', setUser)
    }

    const isAuthenticated = () => Boolean(user?.email)


    return {
        user, userLoading,
        login,
        register,
        whoami,
        logout,
        isAuthenticated,
    };
}
