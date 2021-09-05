import s from './ProfileInfo.module.css'
import topImg from './../../../assets/images/topImg.jpg'
import Button from '../../common/Button/Button'
import ProfileStatus from './ProfileStatus'
import React, {useState} from 'react'
import {TProfileInfo, TProfileInfoWithoutPhotos} from '../../../types/types'
import Avatar from './Avatar'
import ProfileData from './ProfileData'
import ProfileDataForm from './ProfileDataForm'

type ProfileInfoProps = {
    id: number
    isOwner: boolean
    profileInfo: TProfileInfo
    status: string
    updateStatus(status: string): void
    logout(): void
    setAvatar(file: File): void
    setAdditionalProfileInfo(profileInfo: TProfileInfoWithoutPhotos): void
}

const ProfileInfo = (props: ProfileInfoProps) => {
    const [editMode, setEditMode] = useState(false)

    const toggleEditMode = () => {
        setEditMode(x => !x)
    }

    return (
        <div>
            <div className={s.topImg}>
                <img src={topImg} alt="topImage"/>
            </div>

            <div className={s.profile}>
                <Avatar photo={props.profileInfo.photos.large} setAvatar={props.setAvatar} isOwner={props.isOwner}/>
                <div>
                    <p className={s.title}>{props.profileInfo.fullName}</p>
                    <ProfileStatus isOwner={props.isOwner} status={props.status} updateStatus={props.updateStatus}/>
                    {
                        editMode ?
                            <ProfileDataForm id={props.id} profileInfo={props.profileInfo} save={toggleEditMode}
                                             setAdditionalProfileInfo={props.setAdditionalProfileInfo}/>
                            :
                            <ProfileData profileInfo={props.profileInfo} isOwner={props.isOwner} edit={toggleEditMode}/>
                    }

                </div>
            </div>

            <div>
                {props.isOwner && <Button text={'Logout'} onClick={props.logout}/>}
            </div>
        </div>
    )
}

export default ProfileInfo
