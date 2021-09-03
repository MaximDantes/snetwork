import {TState} from '../../redux/store'

export const getProfileInfo = (state: TState) => state.profile.profileInfoData
export const getProfileStatus = (state: TState) => state.profile.status
export const getProfileIsFetching = (state: TState) => state.profile.isFetching