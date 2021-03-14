import { connect } from "react-redux";
import { sendMessageActionCreator, writeNewMessageActionCreator } from "../../../redux/dialogsReducer1";
import Messages from "../../Dialogs1/Messages/Messages";

const mapStateToProps = (state) => ({
    dialogs: state.dialogs
});

const mapDispatchToProps = (dispatch) => ({
    sendMessage: () => {
        dispatch(sendMessageActionCreator());
    },
    writeNewMessage: (e) => {
        dispatch(writeNewMessageActionCreator(e.target.value));
    },
});

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;