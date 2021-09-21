import {TProfileInfo, TProfileInfoWithoutPhotos} from '../../types/types'

export const addPost = (text: string) => ({
    type: 'profile/ADD_POST',
    text
} as const)

export const setProfile = (profileInfo: TProfileInfo) => ({
    type: 'profile/SET_PROFILE',
    profileInfo
} as const)

export const setStatus = (status: string) => ({
    type: 'profile/SET_STATUS',
    status,
} as const)

export const toggleFetching = (isFetching: boolean) => ({
    type: 'profile/TOGGLE_FETCHING',
    isFetching
} as const)

export const deletePost = (postId: number) => ({
    type: 'profile/DELETE_POST',
    postId
} as const)

export const _setAvatarSuccess = (small: string, large: string) => ({
    type: 'profile/SET_AVATAR_SUCCESS',
    small,
    large
} as const)

export const _setAdditionalProfileInfoSuccess = (profileInfo: TProfileInfoWithoutPhotos) => ({
    type: 'profile/SET_ADDITIONAL_PROFILE_INFO_SUCCESS',
    profileInfo
} as const)