import topImg from './../../../assets/images/topImg.jpg'
import Button from '../../common/Button/Button'
import ProfileStatus from './ProfileStatus'
import React, {useState} from 'react'
import {TProfileInfo, TProfileInfoWithoutPhotos} from '../../../types/types'
import Avatar from './Avatar'
import ProfileData from './ProfileData'
import ProfileDataForm from './ProfileDataForm'
import styled from 'styled-components'

type ProfileInfoProps = {
    id: number
    isOwner: boolean
    profileInfo: TProfileInfo | null
    status: string
    updateStatus(status: string): void
    logout(): void
    setAvatar(file: File): void
    setAdditionalProfileInfo(profileInfo: TProfileInfoWithoutPhotos): void
}

const StyledDiv = styled.div`
  .profile {
    display: flex;
    margin: 20px 0;
    font-size: 18px;
  }

  .topImg img {
    width: 100%;
  }

  .profile img {
    display: block;
    width: 200px;
    height: 200px;
    margin-right: 10px;
  }

  .title {
    font-size: 30px;
  }

  .status {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .profile p {
    line-height: 25px;
  }

  .profile a {
    color: #62dafc;
  }
  
  .profileData {
    margin: 0 5px;
  }
`

const ProfileInfo = (props: ProfileInfoProps) => {
    const [editMode, setEditMode] = useState(false)

    const toggleEditMode = () => {
        setEditMode(x => !x)
    }

    return (
        <StyledDiv>
            <div className={'topImg'}>
                <img src={topImg} alt="topImage"/>
            </div>

            <div className={'profile'}>
                <Avatar photo={props.profileInfo?.photos.large} setAvatar={props.setAvatar} isOwner={props.isOwner}/>
                <div className={'profileData'}>
                    <p className={'title'}>{props.profileInfo?.fullName}</p>
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
        </StyledDiv>
    )
}

export default ProfileInfo
