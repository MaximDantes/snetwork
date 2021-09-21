import React, {ChangeEvent, useState} from 'react'
import Button from '../common/Button/Button'
import FormikInput from '../common/Formik/FormikInput'
import styled from 'styled-components'

type TProps = {
    send(message: string): void
    readyStatus: 'pending' | 'ready'
}

const StyledDiv = styled.div`
    border-top: 1px solid #919191;
    display: grid;
    align-items: center;
    grid-template-columns: 8fr 1fr;
    gap: 20px;
    
    input {
        height: fit-content;
    }
`

const MessageForm: React.FC<TProps> = (props) => {
    const [message, setMessage] = useState('')

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setMessage(e.currentTarget.value)
    }

    const onClick = () => {
        props.send(message)
        setMessage('')
    }

    return <StyledDiv>
        <FormikInput value={message} onChange={onChange} name={'message'}/>
        <Button onClick={onClick}
                disabled={props.readyStatus === 'pending'}
                text={'Send'}/>
    </StyledDiv>
}

export default MessageForm
