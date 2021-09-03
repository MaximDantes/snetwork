import React from 'react'
import {Field} from 'react-final-form'
import styled from 'styled-components'

type TProps = {
    value?: string
    name: string
    placeholder?: string
    validate?(value: string): string | undefined
}

const StyledDiv = styled.div`
  margin: 5px 0;
  font-size: 16px;

  input {
    background-color: #f1f1f1;
    border: 1px solid #919191;
    border-radius: 3px;
    padding: 3px;
    width: 100%;
    font-size: 16px;
  }

  .error {
    input {
      border: 1px #f00 solid;
    }

    span {
      color: #f00;
    }
  }
`

const InputField: React.FC<TProps> = (props) => {
    return (
        <Field
            name={props.name}
            validate={props.validate}
        >
            {({input, meta}) => (
                <StyledDiv>
                    <div className={meta.error && meta.touched && 'error'}>
                        <input {...input} placeholder={props.placeholder}/>
                        {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                </StyledDiv>
            )}
        </Field>
    )
}

export default InputField