import dialogsClasses from './Dialogs.module.css';
import MessagesContainer from './Messages/MessagesContainer';
import Senders from './Senders/Senders';
import {useSelector} from 'react-redux'
import {getSendersData} from '../../utils/selectors/dialogs-selectors'
import React from 'react'

const Dialogs: React.FC = () => {

    const sendersData = useSelector(getSendersData)

    return (
        <div className={dialogsClasses.dialogs}>
            <Senders sendersData={sendersData} />
            <MessagesContainer />
        </div>
    );
}

export default Dialogs;

