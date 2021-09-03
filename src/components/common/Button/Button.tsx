import React from 'react'
import s from './Button.module.css';

type TProps = {
    onClick?(): void
    text?: string
    type?: 'submit'
    disabled?: boolean
}

const Button: React.FC<TProps> = (props) => {
    return (
        <button
            onClick={props.onClick}
            className={s.button}
            type={props.type}
            disabled={props.disabled}
        >
            {props.text}
        </button>
    );

}

export default Button;