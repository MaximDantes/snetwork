import Message from './Message/Message';
import s from './Messages.module.css';
import NewMessage from './NewMessage/NewMessage';

const Messages = (props) => {

    const onHandleSubmit = (formData) => {
        props.sendMessage(formData.message);
    }

    let messagesItems = props.dialogs.messagesData.map(item => (<Message text={item.text} sender={item.sender} />));

    return (
        <div className={s.messages}>
            <div className={s.scroller}>{messagesItems}</div>
            <NewMessage onSubmit={onHandleSubmit} />
        </div>
    );
}

export default Messages;
