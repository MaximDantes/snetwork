import { NavLink } from 'react-router-dom';
import senderClasses from './Sender.module.css';

const Sender = (props) => {
    return (
        <div className={senderClasses.sender}>
            <NavLink to={'/dialogs/' + props.id} activeClassName={senderClasses.active}>
                <img src={props.avatar} alt="avatar" />
                <p>{props.name}</p>
            </NavLink>
        </div>
    );
}

export default Sender;
