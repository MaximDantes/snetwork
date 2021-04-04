import { connect } from "react-redux";
import { sendMessage } from "../../../redux/dialogsReducer";
import Messages from "../Messages/Messages";

const mapStateToProps = (state) => ({
    dialogs: state.dialogs
});

const MessagesContainer = connect(mapStateToProps, {sendMessage})(Messages);

export default MessagesContainer;