import React from 'react'
import styled from 'styled-components'

type TProps = {
    onClick?(): void
    text?: string
    type?: 'submit'
    disabled?: boolean
}

const StyledButton = styled.button`
  padding: 5px;
  font-size: 20px;
  background: #62dafc;
  border-radius: 3px;
  margin: 5px 0;
`

const Button: React.FC<TProps> = ({text, ...props}) => {
    return (
        <StyledButton {...props}>{text}</StyledButton>
    )
}

export default Button