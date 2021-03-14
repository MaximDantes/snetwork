import React from 'react';
import newMessageClasses from './NewMessage.module.css';

const NewMessage = (props) => {
    return (
        <div className={newMessageClasses.newMessage}>

            <textarea
                placeholder='Write your message here...'
                value={props.newMessageText}
                onChange={props.writeNewMessage}
            />

            <button onClick={props.sendMessage}>Send</button>
        </div>

    );
}

export default NewMessage;
