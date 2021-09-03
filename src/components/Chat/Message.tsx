import React from 'react'
import {TMessage} from '../../types/types'
import defaultAvatar from '../../assets/images/defaultAvatar.jpg'

type TProps = {
    message: TMessage
}

const Message: React.FC<TProps> = (props) => {
    return <div>
        <img src={props.message.photo || defaultAvatar} alt="avatar"/>
        <b>{props.message.userName}</b>
        <p>{props.message.message}</p>
    </div>
}

export default Message