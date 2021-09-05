import React from 'react'
import {TMessage} from '../../types/types'
import defaultAvatar from '../../assets/images/defaultAvatar.jpg'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

type TProps = {
    message: TMessage
}

const StyledDiv = styled.div`
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`

const Message: React.FC<TProps> = (props) => {

    return <StyledDiv>
        <NavLink to={`/profile/${props.message.userId}`}>
            <img src={props.message.photo || defaultAvatar} alt={'avatar'}/>
        </NavLink>
        <b>{props.message.userName}</b>
        <p>{props.message.message}</p>
    </StyledDiv>
}

export default Message