import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import {getProfile, getStatus, setAdditionalProfileInfo, setAvatar, updateStatus} from '../../redux/profileReducer'
import Preloader from '../common/Preloader/Preloader'
import Profile from './Profile'
import {logout} from '../../redux/authReducer'
import {TProfileInfoWithoutPhotos} from '../../types/types'
import {getProfileInfo, getProfileIsFetching, getProfileStatus} from '../../utils/selectors/profile-selectors'
import {getAuthId} from '../../utils/selectors/auth-selectors'
import useRedirect from '../../hooks/useRedirect'

const ProfileContainer: React.FC = () => {
    const dispatch = useDispatch()

    const profileInfo = useSelector(getProfileInfo)
    const status = useSelector(getProfileStatus)
    const isFetching = useSelector(getProfileIsFetching)
    const authId = useSelector(getAuthId)

    const updateStatusProps = (status: string) => dispatch(updateStatus(status))
    const logoutProps = () => dispatch(logout())
    const setAvatarProps = (file: File) => dispatch(setAvatar(file))
    const setAdditionalProfileInfoProps = (profileInfo: TProfileInfoWithoutPhotos) => dispatch(setAdditionalProfileInfo(profileInfo))

    let id = Number(useParams< {id? : string | undefined} >().id)

    useEffect(() => {
        if (!id && authId) id = authId
        dispatch(getStatus(id))
        dispatch(getProfile(id))
    }, [id, authId])

    useRedirect('/login')

    return (
        <>
            {
                isFetching
                    ?
                    <Preloader/>
                    :
                    <Profile
                        id={id}
                        profileInfo={profileInfo}
                        status={status}
                        updateStatus={updateStatusProps}
                        logout={logoutProps}
                        setAvatar={setAvatarProps}
                        setAdditionalProfileInfo={setAdditionalProfileInfoProps}
                        isOwner={!id}
                    />
            }
        </>
    )
}

export default ProfileContainer
