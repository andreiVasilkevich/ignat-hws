import React from 'react'
import s from './Message.module.css'
import {MessageType} from "../HW1";

// нужно создать правильный тип вместо any
export type MessagePropsType = {
    messages: MessageType
}

// нужно отобразить приходящие данные
const Message = (props:  MessagePropsType) => {
    return (
        <div id={'hw1-message-' + props.messages.id} className={s.message}>
            <div className={s.imageAndText}>
                <img src = {props.messages.user.avatar}
                    id={'hw1-avatar-' + props.messages.id}
                    // создаёт студент

                    //
                />
                <div className={s.text}>
                    <div id={'hw1-name-' + props.messages.id} className={s.name}>
                        {/*создаёт студент*/ }
                        {props.messages.user.name}
                        {/**/}
                    </div>
                    <pre id={'hw1-text-' + props.messages.id} className={s.messageText}>
                        {/*создаёт студент*/}
                        {props.messages.message.text}
                        {/**/}
                    </pre>
                </div>
            </div>
            <div id={'hw1-time-' + props.messages.id} className={s.time}>
                {/*создаёт студент*/}
                {props.messages.message.time}
                {/**/}
            </div>
        </div>
    )
}

export default Message
