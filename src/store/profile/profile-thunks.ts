import {profileApi, ResultCodes} from '../../api/api'
import {
    _setAdditionalProfileInfoSuccess,
    _setAvatarSuccess,
    setProfile,
    setStatus,
    toggleFetching
} from './profile-actions'
import {TProfileThunkResult} from './profile-reducer'
import {TProfileInfoWithoutPhotos} from '../../types/types'

export const getProfile = (id: number):
    TProfileThunkResult<void> => async (dispatch) => {
    dispatch(toggleFetching(true))

    const response = await profileApi.getProfile(id)

    dispatch(setProfile(response))
    dispatch(toggleFetching(false))
}

export const getStatus = (id: number):
    TProfileThunkResult<void> => async (dispatch) => {
    const response = await profileApi.getStatus(id)
    dispatch(setStatus(response))
}

export const updateStatus = (status: string):
    TProfileThunkResult<void> => async (dispatch) => {
    await profileApi.updateStatus(status)
    dispatch(setStatus(status))
}

export const setAvatar = (file: File):
    TProfileThunkResult<void> => async (dispatch) => {
    const response = await profileApi.setAvatar(file)
    if (response.resultCode === ResultCodes.Success) {
        dispatch(_setAvatarSuccess(response.data.photos.small, response.data.photos.large))
    }
}

export const setAdditionalProfileInfo = (profileInfo: TProfileInfoWithoutPhotos):
    TProfileThunkResult<void> => async (dispatch) => {
    const response = await profileApi.setAdditionalProfileInfo(profileInfo)
    if (response.resultCode === ResultCodes.Success) {
        dispatch(_setAdditionalProfileInfoSuccess(profileInfo))
    }
}