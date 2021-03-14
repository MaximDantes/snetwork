import { connect } from 'react-redux';
import { sendMessageActionCreator, writeNewMessageActionCreator } from '../../../../redux/dialogsReducer';
import NewMessage from './NewMessage';

const mapStateToProps = (state) => {
    return {
        newMessageText: state.profile.newMessageText,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageActionCreator());
        },
        writeNewMessage: (e) => {
            dispatch(writeNewMessageActionCreator(e.target.value));
        },
    }
}

const NewMessageContainer = connect(mapStateToProps, mapDispatchToProps)(NewMessage);

export default NewMessageContainer;
