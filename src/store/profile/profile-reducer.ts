import {TProfileInfo} from '../../types/types'
import * as actions from './profile-actions'
import {ThunkAction} from 'redux-thunk'
import {TState} from '../store'

type TPost = {
    id: number,
    avatar: string,
    text: string
}
type TInitialState = {
    postsData: TPost[],
    profileInfoData: TProfileInfo | null,
    status: string,
    isFetching: boolean,
    newPostText: ''
}

type TInferValues<T> = T extends { [key: string]: infer U } ? U : never
export type TActions = ReturnType<TInferValues<typeof actions>>

export type TProfileThunkResult<T> = ThunkAction<T, TState, undefined, TActions>


const initialState: TInitialState = {
    postsData: [
        {
            id: 1,
            avatar: 'https://sun9-38.userapi.com/impg/3qV6CsDQFrvAyuxIjVaS0byAvupKqPeoedq9rA/vh5FmTbwXqI.jpg?size=1077x1080&quality=96&sign=2d6c44aac83eff97da8a839437f223e5&type=album',
            text: 'I know that my redemeer lives and that in the end he will stand up on the Earth'
        },
        {
            id: 2,
            avatar: 'https://sun9-60.userapi.com/impg/S26Ob2ZUtOe969MNMNA-YfTkvBEPX4rCLM2ppQ/9h9QPrUTWOc.jpg?size=1080x1035&quality=96&sign=0315f01c9fda4ba66c5ffdc1df62200a&type=album',
            text: 'And after my skeen has been destroyed, yet in my flash I will see God.'
        },
        {
            id: 3,
            avatar: 'https://sun9-27.userapi.com/impg/c857036/v857036066/17d27d/yT-CcAdWjDs.jpg?size=620x630&quality=96&sign=4a3eb8f6659a7a18cb37e3a4790f7a67&type=album',
            text: 'I myself will see him with my own eyes I and now another How my heart yearns within me Amen If you say how we will hound him scince the root of the troubles lives in him you should fear the sword yourself For wrath will bring punishment by the sword And them you will know that there is judment'
        }
    ],
    profileInfoData: null,
    status: '',
    isFetching: true,
    newPostText: ''
}

export const profileReducer = (state = initialState, action: TActions): TInitialState => {
    switch (action.type) {
        case 'profile/ADD_POST':
            return {
                ...state,
                postsData: [...state.postsData, {
                    id: 4,
                    avatar: 'https://sun9-68.userapi.com/impg/12EYl0H74Hwiw95LDIs7HfrcsBva63QR2xf3aw/laaW_OYil8I.jpg?size=627x564&quality=96&sign=66c38dbd91ea9d142994527ecfeb7d29&type=album',
                    text: action.text
                }],
                newPostText: ''
            }

        case 'profile/SET_PROFILE':
            return {
                ...state,
                profileInfoData: action.profileInfo
            }

        case 'profile/SET_STATUS':
            return {
                ...state,
                status: action.status
            }

        case 'profile/TOGGLE_FETCHING':
            return {
                ...state,
                isFetching: action.isFetching
            }

        case 'profile/DELETE_POST':
            return {
                ...state,
                postsData: state.postsData.filter(x => x.id != action.postId)
            }

        case 'profile/SET_AVATAR_SUCCESS':
            return {
                ...state,
                profileInfoData: state.profileInfoData ? {
                        ...state.profileInfoData,
                        photos: {
                            small: action.small,
                            large: action.large
                        }
                    }
                    :
                    null
            }

        case 'profile/SET_ADDITIONAL_PROFILE_INFO_SUCCESS':
            return {
                ...state,
                profileInfoData: {
                    ...action.profileInfo,
                    photos: state.profileInfoData?.photos || {
                        small: null, large: null
                    }
                }
            }

        default:
            return state
    }
}