import React, {useEffect, useRef} from 'react'

import styles from './chatMessage.module.css'

function zero(time){
    return `${time<10?'0':''}`
}
function messageTime(message){
    const date = new Date(message.createdAt);
    return `${zero(date.getHours())}${date.getHours()} : ${zero(date.getMinutes())}${date.getMinutes()}`
}

export default function ChatMessage({
                                    message,
                                    user,
                                }){

    /*
    // Хотелось бы сделать так
    return (
        <MessageWrapper message={message} user={user}>
            {`${message.text}${!message.isDelivered ? " (отправляется)" : ''}`}
        </MessageWrapper>
    );
    * */

    const mymssg = message.sender == user.id;

    return (
        <div className={`${mymssg? styles['chat-message__wrapper'] :''}  ${mymssg? styles['mymssg']:''}`}>

            <div className={styles[`chat-message`]}>
                <div className={styles["chat-message__text"]}>
                    {`${message.text}${!message.isDelivered ? " (отправляется)" : ''}`}
                </div>
                <div className={styles["chat-message__time"]}>
                    {messageTime(message)}
                </div>
            </div>

        </div>
    );
}