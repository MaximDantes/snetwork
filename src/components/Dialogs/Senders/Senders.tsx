import Sender from './Sender/Sender'
import {TUser} from '../../../store/dialogsReducer'
import React from 'react'

type TProps = {
    sendersData: TUser[]
}

const Senders: React.FC<TProps> = (props) => {

    return (
        <div>
            {
                props.sendersData.map(item =>
                    <Sender
                        id={item.id}
                        name={item.name}
                        avatar={item.avatar}
                    />
                )}
        </div>
    )
}

export default Senders
