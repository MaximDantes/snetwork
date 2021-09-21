import {NavLink} from 'react-router-dom'
import defaultAvatar from '../../assets/images/defaultAvatar.jpg'
import Button from '../common/Button/Button'
import React from 'react'
import styled from 'styled-components'

type TProps = {
    id: number
    name: string
    status: string | null
    photos: {
        large: string | null
    }
    followed: boolean
    followingInProgress: number[]
    toggleFollowing(id: number, followed: boolean): void
}

const StyledDiv = styled.div`
    display: flex;
    margin: 5px 0;
    padding: 5px 0;

    .status {
        font-size: 20px;
    }

    p {
        line-height: 20px;
        margin-bottom: 5px;
    }
    
    img {
        height: 100px;
        width: 100px;
        border-radius: 3%;
        margin: 0 10px 0 5px;
    }

    button {
        display: block;
        width: 100px;
        margin: 5px;
    }
`

const User: React.FC<TProps> = (props) => {
    return (
        <StyledDiv>
            <div>
                <NavLink to={`/profile/${props.id}`}>
                    <img src={props.photos.large || defaultAvatar} alt="avatar"/>
                </NavLink>

                <Button
                    disabled={props.followingInProgress.some(id => id === props.id)}
                    onClick={() => {
                        props.toggleFollowing(props.id, !props.followed)
                    }}
                    text={props.followed ? 'Unfollow' : 'Follow'}
                />
            </div>

            <div>
                <p>{props.name}</p>
                <p className={'status'}>{props.status}</p>
            </div>
        </StyledDiv>
    )
}

export default User