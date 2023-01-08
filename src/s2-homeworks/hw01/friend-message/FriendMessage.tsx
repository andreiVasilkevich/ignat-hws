import React from 'react'
import s from './FriendMessage.module.css'
import {MessagePropsType} from "../message/Message";

// создать тип вместо any и отобразить приходящие данные
const FriendMessage = (props: MessagePropsType) => {
    return (
        <div
            id={'hw1-friend-message-' + props.messages.id}
            className={s.friendMessage}
        >
            <div className={s.friendImageAndText}>
                <img src= {props.messages.user.avatar}
                    id={'hw1-friend-avatar-' + props.messages.id}
                    // создаёт студент

                    //
                />
                <div className={s.friendText}>
                    <div
                        id={'hw1-friend-name-' + props.messages.id}
                        className={s.friendName}
                    >
                        {/*создаёт студент*/}
                        {props.messages.user.name}
                        {/**/}
                    </div>
                    <pre
                        id={'hw1-friend-text-' + props.messages.id}
                        className={s.friendMessageText}
                    >
                        {/*создаёт студент*/}
                        {props.messages.message.text}
                        {/**/}
                    </pre>
                </div>
            </div>
            <div
                id={'hw1-friend-time-' + props.messages.message.time}
                className={s.friendTime}
            >
                {/*создаёт студент*/}
                {props.messages.message.time}
                {/**/}
            </div>
        </div>
    )
}

export default FriendMessage
