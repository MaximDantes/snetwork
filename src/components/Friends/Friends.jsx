import Friend from './Friend/Friend';
import friendsClasses from './Friends.module.css';

const Friends = (props) => {
    let friendsData = props.state.friendsData.map( (item) => (
        <Friend 
            firstName={item.firstName}
            surname={item.surname}
            avatar={item.avatar}
        />
    ));

    return (
        <div>
            { friendsData }
        </div>
    );
}

export default Friends;
