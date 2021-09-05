import React from 'react'
import styled from 'styled-components'

type TProps = {
    name: string
    checked: boolean
    placeholder?: string
    onChange?(e: React.ChangeEvent<HTMLInputElement>): void
    onBlur?(e: React.FocusEvent<HTMLInputElement>): void
}

//TODO checked styles
const StyledInput = styled.input`
 
`
const StyledSpan = styled.span`
  margin-left: 5px;
  font-size: 16px;
  color: #757575;
`


const FormikCheckBox: React.FC<TProps> = ({placeholder, ...props}) => {
    return (
        <>
            <StyledInput type={'checkbox'} {...props}/>
            <StyledSpan>{placeholder}</StyledSpan>
        </>
    )
}

export default FormikCheckBox