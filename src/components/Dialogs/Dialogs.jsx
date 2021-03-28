import dialogsClasses from './Dialogs.module.css';
import MessagesContainer from './Messages/MessagesContainer';
import Senders from './Senders/Senders';

const Dialogs = (props) => {
    return (
        <div className={dialogsClasses.dialogs}>
            <Senders sendersData={props.state.sendersData} />
            <MessagesContainer />
        </div>
    );
}

export default Dialogs;

