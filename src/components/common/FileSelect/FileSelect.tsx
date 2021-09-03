import React from 'react'
import styled from 'styled-components'

type TProps = {
    //text: string
    onChange: React.ChangeEventHandler<HTMLInputElement>
}

const StyledInput = styled.input`
  padding: 5px;
  font-size: 20px;
  background: #62dafc;
  border-radius: 3px;
  margin: 5px 0;
  width: fit-content;
`

const FileSelect: React.FC<TProps> = (props) => {
    return (
        <StyledInput
            onChange={props.onChange}
            type={'file'}
        ></StyledInput>
    )
}

export default FileSelect