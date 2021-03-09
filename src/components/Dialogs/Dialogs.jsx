import { Route } from 'react-router';
import dialogsClasses from './Dialogs.module.css';
import Messages from './Messages/Messages';
import Senders from './Senders/Senders';

const Dialogs = (props) => {
    return (
        <div className={dialogsClasses.dialogs}>
            <Senders sendersData={props.state.sendersData} />
            <Messages
                state={props.state}
                dispatch={props.dispatch}
            />
        </div>
    );
}

export default Dialogs;

