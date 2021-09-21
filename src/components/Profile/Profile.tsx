import ProfileInfo from './ProfileInfo/ProfileInfo';
import {TProfileInfo, TProfileInfoWithoutPhotos} from '../../types/types'
import PostsContainer from './Posts/PostsContainer';
import React from 'react'

type TProps = {
    id: number
    isOwner: boolean
    profileInfo: TProfileInfo | null
    status: string
    updateStatus(status: string): void
    logout(): void
    setAvatar(file: File): void
    setAdditionalProfileInfo(profileInfo: TProfileInfoWithoutPhotos): void
}

const Profile: React.FC<TProps> = (props) => {
    return (
        <div>
            <ProfileInfo id={props.id} profileInfo={props.profileInfo} isOwner={props.isOwner} status={props.status}
                         updateStatus={props.updateStatus} logout={props.logout} setAvatar={props.setAvatar}
                         setAdditionalProfileInfo={props.setAdditionalProfileInfo}/>
            {/*<PostsContainer />*/}
        </div>
    )
}

export default Profile;