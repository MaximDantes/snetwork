import React from 'react'
import styled from 'styled-components'

type TProps = {
    name: string
    value: string
    placeholder?: string
    onChange?(e: React.ChangeEvent<HTMLSelectElement>): void
    onBlur?(e: React.FocusEvent<HTMLSelectElement>): void
}

const StyledSelect = styled.select`
  background-color: #f1f1f1;
  border: 1px solid #919191;
  border-radius: 3px;
  padding: 5px;
  font-size: 16px;
`

const FormikSelect: React.FC<TProps> = (props) => {
    return (
        <StyledSelect {...props}>
            {props.children}
        </StyledSelect>
    )
}

export default FormikSelect