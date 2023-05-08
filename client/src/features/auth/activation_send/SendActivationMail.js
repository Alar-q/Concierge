import React, {useMemo, useState} from 'react';

import useTimer from "../../../hooks/useTimer";
import Logger from "../../../internal/Logger";

import Input from '../../../shared/ui/input/Input';
import Button from '../../../shared/ui/button/Button'
import Alert from "../../../shared/ui/alert/Alert";
import {useAppContext} from "../../../context/AppContext";

/**
 * SignIn должен работать также, как и OAuth Azure Ad перенаправлять на link и redirect-ить на /?authenticated=Boolean,
 * SignUp не должен перенаправлять, а только возвращать json о том, получилось ли создать нового пользователя или нет.
 * */
export default function SendActivationMail({ }){

    const logger = useMemo(()=>new Logger('SendActivationMail'), []);

    const { authHandler } = useAppContext();
    const { sendActivationMail } = authHandler;

    const [email, setEmail] = useState('');

    const [success, setSuccess] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const {timer, startTimer} = useTimer(()=>{}, 60);

    async function onSubmit(e){
        e.preventDefault();

        setSuccess(null);
        setError(null);
        setLoading(true);

        sendActivationMail({ email })
            .then(json => {
                logger.log(json);
                if(json.status === 200){
                    startTimer();
                    setSuccess(json);
                }
                else {
                    setError(json);
                }
            })
            .catch(e=>setError(e))
            .finally(()=>setLoading(false));
    }

    return (<>
        <h1>Send activation e-mail</h1>

        {loading && <Alert><p>sending email...</p></Alert>}
        {success && <><p>{success.message}</p></>}
        {error && <p>{error.message}</p>}

        {success && <p>We can send again {timer > 0 ? `after ${timer} seconds`:''}</p>}

        <form onSubmit={onSubmit}>
            <div>
                <label>Email</label>
                <Input
                    type="text"
                    name="email"
                    value={email}
                    placeHolder='Введите email'
                    onChange={e => setEmail(e.target.value)}
                    required 
                />
            </div>

            <Button type="submit">Продолжить</Button>
        </form>
    </>);
}