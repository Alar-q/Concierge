import React, {useEffect, useState} from 'react';

import WorkTypes from "./registerForms/WorkTypesForm";
import UserForm from "./registerForms/UserForm";
import PasswordsForm from "./registerForms/PasswordsForm";
import LoginForm from "./loginForms/LoginForm";

import MultistepForm from "../../components/form/MultistepForm";
import {useLocation, useNavigate} from "react-router-dom";
import {useAppContext} from "../../context/AppContext";
import Header from "../new/Header";

const registerForms = [WorkTypes, UserForm, PasswordsForm]
const loginForms = [LoginForm]

function log(...str){
    console.log(...str)
}

export default function Auth() {
    const location = useLocation();
    const navigate = useNavigate();

    const {authHandler} = useAppContext();
    const {user, login, register, userLoading} = authHandler;

    const [data, setData] = useState({})
    const [type, setType] = useState('login');

    function onSubmit(e){
        (async ()=>{

            const state = {...location.state};

            if(type === 'login'){
                const err = await login(data);
                if(err){
                    log("Login error", err);
                    navigate('/authenticate', {replace: true, state});
                }
                else{
                    log("Successful login redirect to", location.state?.redirect ? location.state.redirect : '/');

                    delete state.redirect;
                    // console.log("navigate to", location.state.redirect, "\nstate", state);
                    navigate(location.state?.redirect ? location.state.redirect : '/', {replace: true, state});
                }
            }
            else{
                const err = await register(data);
                if(err){
                    log("Registration error", err);
                    navigate('/authenticate', {replace: true, state});
                }
                else{
                    log("Successful registration redirect to login");
                    setType('login')
                    // console.log("navigate to /authenticate", "\nstate", state);
                    // navigate(location.state?.redirect ? location.state.redirect : '/', {replace: true, state});

                    navigate('/authenticate', {replace: true, state});
                }
            }

        })()
    }

    return (
        <div className='admin'>
            <Header user={user}></Header>

            <section className="workflow">
                <div className="container2">
                    <div className="sign__wrapper">
                        <div className="sign sign-fixed">
                            <div className="sign__header">
                                <div className="sign__logo">
                                    <img src="/img/logo.png" alt="ConciergeService"/>
                                </div>
                                <div className="sign__tabs dflex aic">
                                    <span
                                        className={`sign__tab ${type === 'login' ? 'sign__tab-active' : ''}`}
                                        onClick={() => setType('login')}
                                    >Вход</span>
                                    <span
                                        className={`sign__tab ${type === 'register' ? 'sign__tab-active' : ''}`}
                                        onClick={() => setType('register')}
                                    >Регистрация</span>
                                </div>
                            </div>

                            {userLoading && <p>loading...</p>}

                            {type === 'login' &&
                                <div className="sign__body sign--style">
                                    {/*<form action="auth">*/}
                                    {/*    <div className="input-form">*/}
                                    {/*        <label htmlFor="people_quantity">Эл. почта *</label>*/}
                                    {/*        <input type="email" name="email" className="input input-choice"*/}
                                    {/*            placeholder="Введите вашу эл. почту" required/>*/}
                                    {/*    </div>*/}
                                    {/*    <div className="input-form">*/}
                                    {/*        <label htmlFor="people_quantity">Пароль</label>*/}
                                    {/*        <input type="password" name="password" className="input input-choice"*/}
                                    {/*            placeholder="Введите пароль" required/>*/}
                                    {/*    </div>*/}
                                    {/*    <button className="btn btn-main" type="submit">Войти</button>*/}
                                    {/*</form>*/}
                                    <MultistepForm
                                        forms={loginForms}
                                        data={data}
                                        setData={setData}
                                        onSubmit={onSubmit}
                                        submitButtonName={"Войти"}
                                    />
                                </div>
                            }

                            {type === 'register' &&
                                <div className="sign__body">
                                    <MultistepForm
                                        forms={registerForms}
                                        data={data}
                                        setData={setData}
                                        onSubmit={onSubmit}
                                        submitButtonName={"Создать аккаунт"}
                                    />
                                </div>
                            }

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}