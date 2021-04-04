import s from './NewMessage.module.css';
import {Field, reduxForm} from "redux-form";
import Button from "../../../common/Button/Button";

let NewMessage = (props) => {
    return (
        <form className={s.newMessage} onSubmit={props.handleSubmit}>
            <Field
                component='textarea'
                name='message'
                placeholder='Write your message here...'
            />
            <Button text='Send'/>
        </form>
    );
}

NewMessage = reduxForm({
    form: 'newMessage'
})(NewMessage);

export default NewMessage;
