import {NavLink} from 'react-router-dom'
import senderClasses from './Sender.module.css'
import React from 'react'

type TProps = {
    avatar: string
    id: number
    name: string
}

const Sender: React.FC<TProps> = (props) => {
    return (
        <div className={senderClasses.sender}>
            <NavLink to={'/dialogs/' + props.id} activeClassName={senderClasses.active}>
                <img src={props.avatar} alt="avatar"/>
                <p>{props.name}</p>
            </NavLink>
        </div>
    )
}

export default Sender
