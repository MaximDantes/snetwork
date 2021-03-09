import Message from './Message/Message';
import messagesClasses from './Messages.module.css';
import NewMessageContainer from './NewMessage/NewMessageContainer';

const Messages = (props) => {
    let messagesItems = props.state.messagesData.map(item => (<Message text={item.text} sender={item.sender} />));

    return (
        <div className={messagesClasses.messages}>

            <div className={messagesClasses.scroller}>
                {messagesItems}
            </div>

            <NewMessageContainer
                state={props.state}
                dispatch={props.dispatch}
            />

        </div>
    );
}

export default Messages;
