import {ResultCodes} from '../api/api'
import {usersApi} from '../api/usersApi'
import {TUser} from '../types/types'

export type TFilter = {
    term: string | null
    friend: boolean | null
}

type TInitialState = {
    usersData: TUser[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: number[],
    filter: TFilter
}

type TAction =
    ReturnType<typeof setUsers> |
    ReturnType<typeof toggleFollowingSuccess> |
    ReturnType<typeof setCurrentPage> |
    ReturnType<typeof setTotalUsersCount> |
    ReturnType<typeof toggleFetching> |
    ReturnType<typeof toggleFollowingProgress> |
    ReturnType<typeof setFilter>

const initialState: TInitialState = {
    usersData: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
    filter: {
        term: null,
        friend: null
    }
}

const usersReducer = (state = initialState, action: TAction): TInitialState => {
    switch (action.type) {
        case 'users/SET_USERS':
            return {
                ...state,
                usersData: action.usersData
            }

        case 'users/TOGGLE_FOLLOWING':
            return {
                ...state,
                usersData: state.usersData.map(item => {
                    if (item.id === action.userId) {
                        return {...item, followed: action.followed}
                    }
                    return {...item}
                })
            }

        case 'users/SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.pageNumber
            }

        case 'users/SET_TOTAL_USERS_COUNT':
            return {
                ...state,
                totalUsersCount: action.count
            }

        case 'users/TOGGLE_FETCHING':
            return {
                ...state,
                isFetching: action.isFetching
            }

        case 'users/TOGGLE_FOLLOWING_PROGRESS':
            return {
                ...state,
                followingInProgress: action.isFollowing ?
                    [...state.followingInProgress, action.id]
                    :
                    state.followingInProgress.filter(id => id !== action.id)
            }

        case 'users/SET_FILTER':
            return {
                ...state,
                filter: action.filter
            }

        default:
            return state
    }
}

export default usersReducer


export const setUsers = (usersData: TUser[]) => ({
    type: 'users/SET_USERS',
    usersData
} as const)

export const toggleFollowingSuccess = (userId: number, followed: boolean) => ({
    type: 'users/TOGGLE_FOLLOWING',
    userId,
    followed
} as const)

export const setCurrentPage = (pageNumber: number) => ({
    type: 'users/SET_CURRENT_PAGE',
    pageNumber
} as const)

export const setTotalUsersCount = (count: number) => ({
    type: 'users/SET_TOTAL_USERS_COUNT',
    count
} as const)

export const toggleFetching = (isFetching: boolean) => ({
    type: 'users/TOGGLE_FETCHING',
    isFetching
} as const)

export const toggleFollowingProgress = (isFollowing: boolean, id: number) => ({
    type: 'users/TOGGLE_FOLLOWING_PROGRESS',
    isFollowing,
    id
} as const)

const setFilter = (filter: TFilter) => ({
    type: 'users/SET_FILTER',
    filter
} as const)

//TODO thunk types
export const getUsers = (pageSize: number, currentPage: number, filter: TFilter) => async (dispatch: any) => {
    dispatch(toggleFetching(true))
    dispatch(setCurrentPage(currentPage))
    dispatch(setFilter(filter))

    const response = await usersApi.getUsers(pageSize, currentPage, filter)

    dispatch(setUsers(response.items))
    dispatch(setTotalUsersCount(response.totalCount))
    dispatch(toggleFetching(false))
}

export const toggleFollowing = (id: number, follow: boolean) => async (dispatch: any) => {

    dispatch(toggleFollowingProgress(true, id))

    const response = await usersApi.toggleFollowing(id, follow)

    if (response.resultCode === ResultCodes.Success) {
        dispatch(toggleFollowingSuccess(id, follow))
        dispatch(toggleFollowingProgress(false, id))
    }
}

