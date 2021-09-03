import React from 'react'
import {TMessage} from '../../types/types'
import Message from './Message'

type TProps = {
    messages: TMessage[]
}

const Chat: React.FC<TProps> = (props) => {
    return <div>
        {props.messages.map((message) => {
            return <Message key={message.message} message={message} />
        })}
    </div>
}

export default Chat
