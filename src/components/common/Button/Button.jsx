import s from './Button.module.css';

const Button = (props) => {
    return (
        <button
            onClick={props.onClick}
            className={s.button}
        >
            {props.text}
        </button>
    );

}

export default Button;