import React from 'react'
import {TMessage} from '../../types/types'
import defaultAvatar from '../../assets/images/defaultAvatar.jpg'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

type TProps = {
    isRepeated: boolean
    isOwner: boolean
    message: TMessage
}

const Message: React.FC<TProps> = (props) => {

    const StyledDiv = styled.div`
        display: flex;
        justify-content: ${props.isOwner ? 'end' : 'start'};
        
        .message {
            display: flex;
            width: fit-content;
            background: ${props.isOwner ? '#bbe6ff' : '#f1f1f1'};
            margin: ${props.isRepeated ? '5px 5px 5px 65px' : '5px'};
            padding: ${props.isRepeated ? '5px' : '5px 10px' };
            border-radius: 5px;

            .text {
                margin: 0 10px;
                font-size: 20px;
            }

            .username {
                margin: 5px 0;
                font-size: 16px;
                color: #173a82;
                font-weight: 700;
            }

            img {
                width: 50px;
                height: 50px;
                border-radius: 50%;
            }
        }
    `

    return <StyledDiv>
        <div className={'message'}>
            {
                !props.isRepeated &&
                <div className={'avatar'}>

                    <NavLink to={`/profile/${props.message.userId}`}>
                        <img src={props.message.photo || defaultAvatar} alt={'avatar'}/>
                    </NavLink>

                </div>
            }
            <div className={'text'}>
                {
                    !props.isRepeated &&
                    <NavLink to={`/profile/${props.message.userId}`}>
                        <p className={'username'}>{props.message.userName}</p>
                    </NavLink>
                }

                <p>{props.message.message}</p>
            </div>
        </div>
    </StyledDiv>
}

export default Message