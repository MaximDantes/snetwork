import friendClasses from './Friend.module.css';

const Friend = (props) => {
    return (
        <div className={friendClasses.friend}>
            <img src={props.avatar} alt="avatar"/>
            <p>{props.firstName} {props.surname}</p>
        </div>
    );
}

export default Friend;
