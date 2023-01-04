import React from 'react';
import {useNavigate} from "react-router-dom";

export default function Register({auth}){
    const navigate = useNavigate();
    const onSubmit = (e) => {
        e.preventDefault();
        auth.register({
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
        });
        navigate('/', {replace: true});
    }
    return (
        <>
            <h1>Register Page</h1>
            <form onSubmit={onSubmit} action="/auth/Register" method="POST">
                <div>
                    <label htmlFor="InputName">Name</label>
                    <input type="text" id="InputName" name="name"/>
                </div>

                <div>
                    <label htmlFor="InputEmail">Email</label>
                    <input type="text" id="InputEmail" name="email"/>
                </div>

                <div>
                    <label htmlFor="InputPassword">Password</label>
                    <input type="text" id="InputPassword" name="password"/>
                </div>

                <br/>
                <button type="submit" className="btn btn-primary">Submit</button>

                <br/>
                <button><a href="/auth/Login">Sign in</a></button>

            </form>

        </>
    );
}