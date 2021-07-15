import Sender from './Sender/Sender';
import sendersClasses from './Senders.module.css';

const Senders = (props) => {
    let sendersItems = props.sendersData.map(item =>
    (
        <Sender
            id={item.id}
            name={item.name}
            avatar={item.avatar}
        />
    )
    );

    return (
        <div>
            { sendersItems}
        </div>
    );
}

export default Senders;
