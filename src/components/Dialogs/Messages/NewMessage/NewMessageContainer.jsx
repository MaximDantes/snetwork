import React from 'react';
import { sendMessageActionCreator, writeNewMessageActionCreator } from '../../../../redux/dialogsReducer';
import NewMessage from './NewMessage';

const NewMessageContainer = (props) => {

    const sendMessage = () => {
        if (props.state) {
            props.dispatch(sendMessageActionCreator());
        }
    };

    const writeNewMessage = (e) => {
        props.dispatch(writeNewMessageActionCreator(e.target.value));
    }


    return (
        <NewMessage
            newMessageText={props.state.newMessageText}
            sendMessage={sendMessage}
            writeNewMessage={writeNewMessage}
        />
    );
}

export default NewMessageContainer;
