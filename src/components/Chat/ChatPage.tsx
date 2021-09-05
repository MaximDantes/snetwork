import React, {useEffect, useState} from 'react'
import Chat from './Chat'
import MessageForm from './MessageForm'
import {TMessage} from '../../types/types'

type TProps = {
    webSocket: WebSocket
}

const ChatPage: React.FC<TProps> = (props) => {

    const [messages, setMessages] = useState<TMessage[]>([])

    const [readyStatus, setReadyStatus] = useState<'pending' | 'ready'>('pending')

    useEffect(() => {
        props.webSocket.addEventListener('open', () => {
            setReadyStatus('ready')
        })
    }, [props.webSocket])

    useEffect(() => {
        props.webSocket.addEventListener('message', (e) => {
            const newMessages = JSON.parse(e.data)
            setMessages((prevMessages) => [...prevMessages, ...newMessages])
        })
    }, [props.webSocket])

    const sendMessage = (message: string) => {
        props.webSocket.send(message)
    }

    return <>
        <Chat messages={messages}/>
        <MessageForm send={sendMessage} readyStatus={readyStatus}/>
    </>
}

export default ChatPage

