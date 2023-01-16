import React from 'react'

export default function Message({
                                        text="Для подтверждения вашей заявки отправьте электронную копию вашего удостоверения",
                                        time="12 : 00",
                                        mymssg=false
}){
    return (
        <div className={`${mymssg?'chat-message__wrapper':''}`}>

            <div className={`chat-message ${mymssg?'mymssg':''}`}>
                <div className="chat-message__text">
                    {text}
                </div>
                <div className="chat-message__time">
                    {time}
                </div>
            </div>

        </div>
    );
}