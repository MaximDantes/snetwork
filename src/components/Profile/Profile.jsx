import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import PostsContainer from './Posts/PostsContainer';

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo {...props.profileInfo}  status={props.status} updateStatus={props.updateStatus} logout={props.logout}/>
            <PostsContainer />
        </div>
    );
}

export default Profile;