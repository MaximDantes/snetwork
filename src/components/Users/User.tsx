import style from './Users.module.css'
import {NavLink} from 'react-router-dom'
import defaultAvatar from '../../assets/images/defaultAvatar.jpg'
import Button from '../common/Button/Button'
import React from 'react'

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
//TODO styled component
const User: React.FC<TProps> = (props) => {
    return (
        <div className={style.user}>
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
                <p className={style.status}>{props.status || 'default status'}</p>
            </div>
        </div>
    )
}

export default User