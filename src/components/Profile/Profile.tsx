import ProfileInfo from './ProfileInfo/ProfileInfo';
import { TProfileInfo } from '../../types/types'
import PostsContainer from './Posts/PostsContainer';

type ProfileProps = {
    profileInfo: TProfileInfo
    status: string
    updateStatus(status: string): void
    logout(): void

}

const Profile = (props: ProfileProps) => {
debugger
    return (
        <div>
            <ProfileInfo {...props.profileInfo}  status={props.status} updateStatus={props.updateStatus} logout={props.logout}/>
            <PostsContainer />
        </div>
    );
}

export default Profile;