import profileClasses from './Profile.module.css';
import Posts from './Posts/Posts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import NewPostContainer from './NewPost/NewPostContainer';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo
                state={props.state.profileInfoData}
            />
            <NewPostContainer
                state={props.state}
                dispatch={props.dispatch}
            />
            <Posts state={props.state.postsData} />

        </div>
    );
};

export default Profile;