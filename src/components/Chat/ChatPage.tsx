import React, {useEffect, useState} from 'react'
import Chat from './Chat'
import MessageForm from './MessageForm'
import {TMessage} from '../../types/types'

const ChatPage: React.FC = () => {

    const [webSocket, setWebSocket] = useState<WebSocket | null>(null)

    const [messages, setMessages] = useState<TMessage[]>([])

    const [readyStatus, setReadyStatus] = useState<'pending' | 'ready'>('pending')

    const createChannel = () => {
        setWebSocket(new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx'))
    }

    useEffect(() => {
        createChannel()
    }, [])

    useEffect(() => {
        webSocket?.addEventListener('open', () => {
            setReadyStatus('ready')
        })

        webSocket?.addEventListener('message', (e) => {
            const newMessages = JSON.parse(e.data)
            setMessages((prevMessages) => [...prevMessages, ...newMessages])
        })

        webSocket?.addEventListener('close', () => {
            console.error('WS CLOSED')
        })
    }, [webSocket])

    const sendMessage = (message: string) => {
        webSocket?.send(message)
        webSocket?.close()
    }

    return <>
        <Chat messages={messages}/>
        <MessageForm send={sendMessage} readyStatus={readyStatus}/>
    </>
}

export default ChatPage

