import React, {ChangeEvent, useState} from 'react'
import Button from '../common/Button/Button'

type TProps = {
    send(message: string): void
    readyStatus: 'pending' | 'ready'
}

const MessageForm: React.FC<TProps> = (props) => {
    const [message, setMessage] = useState('')

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setMessage(e.currentTarget.value)
    }

    const onClick = () => {
        props.send(message)
    }

    return <div>
        <input type="text" value={message} onChange={onChange}/>
        <Button onClick={onClick}
                disabled={props.readyStatus === 'pending'}
                text={'Send'}/>
    </div>
}

export default MessageForm
