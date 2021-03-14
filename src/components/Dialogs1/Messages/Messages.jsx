import Message from './Message/Message';
import messagesClasses from './Messages.module.css';
import NewMessage from './NewMessage/NewMessage';


const Messages = (props) => {
    let messagesItems = props.dialogs.messagesData.map(item => (<Message text={item.text} sender={item.sender} />));

    return (
        <div className={messagesClasses.messages}>

            <div className={messagesClasses.scroller}>
                {messagesItems}
            </div>

            <NewMessage
                newMessageText={props.dialogs.newMessageText}
                writeNewMessage={props.writeNewMessage}
                sendMessage={props.sendMessage}
            />

        </div>
    );
}

export default Messages;
