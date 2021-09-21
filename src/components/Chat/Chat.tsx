import React from 'react'
import {TMessage} from '../../types/types'
import Message from './Message'
import {useSelector} from 'react-redux'
import {getAuthId} from '../../utils/selectors/auth-selectors'
import styled from 'styled-components'

type TProps = {
    messages: TMessage[]
}

const StyledDiv = styled.div`
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    overflow-x: hidden;
    height: 80vh;
`

const Chat: React.FC<TProps> = (props) => {

    const authId = useSelector(getAuthId)

    let lastSenderId = -1

    const messages = props.messages.map((message, index) => {
        let isRepeated = false
        let isOwner = false

        if (message.userId === lastSenderId) isRepeated = true
        if (message.userId === authId) isOwner = true

        lastSenderId = message.userId

        if (message.message) return <Message key={message.message + message.userId + index} message={message} isRepeated={isRepeated} isOwner={isOwner}/>
    })

    return <StyledDiv>{messages}</StyledDiv>
}

export default Chat
