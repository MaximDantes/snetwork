import React from 'react'
import styled from 'styled-components'

type TProps = {
    name: string
    value: string
    placeholder?: string
    type?: 'text' | 'password'
    onChange?(e: React.ChangeEvent<HTMLInputElement>): void
    onBlur?(e: React.FocusEvent<HTMLInputElement>): void
}

const StyledInput = styled.input`
  background-color: #f1f1f1;
  border: 1px solid #919191;
  border-radius: 3px;
  padding: 5px;
  font-size: 16px;
`

const FormikInput: React.FC<TProps> = (props) => {
    return (
        <StyledInput {...props}/>
    )
}

export default FormikInput