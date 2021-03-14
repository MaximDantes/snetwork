import messageClasses from './Message.module.css';

const Message = (props) => {
    if (props.sender === 0) {
        return (
            <div className={messageClasses.message + ' ' + messageClasses.received}>
                <p>{props.text}</p>
            </div>
        );
    } else {
        return (
            <div className={messageClasses.message + ' ' + messageClasses.sended}>
                <p>{props.text}</p>
            </div>
        );
    }
}

export default Message;
