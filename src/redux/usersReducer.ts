import {usersApi} from '../api/api'

type User = {
    id: number,
    name: string,
    status: string,
    photos: {
        small: string,
        large: string
    },
    followed: boolean
}
type InitialStateType = {
    usersData: User[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    findText: string,
    isFetching: boolean,
    followingInProgress: number[],
}
type SetUsersActionType = {
    type: typeof actionTypes.setUsers,
    usersData: User[]
}
type ToggleFollowingSuccessActionType = {
    type: typeof actionTypes.toggleFollowing,
    userId: number,
    followed: boolean
}
type SetCurrentPageActionType = {
    type: typeof actionTypes.setCurrentPage,
    pageNumber: number
}
type SetTotalUsersCountActionType = {
    type: typeof actionTypes.setTotalUsersCount,
    count: number
}
type ToggleFetchingActionType = {
    type: typeof actionTypes.toggleFetching,
    isFetching: boolean
}
type ToggleFollowingProgressActionType = {
    type: typeof actionTypes.toggleFollowingProgress,
    isFollowing: boolean,
    id: number
}
type WriteFindTextActionType = {
    type: typeof actionTypes.writeFindText,
    text: string
}


const actionTypes = {
    setUsers: 'users/SET_USERS',
    toggleFollowing: 'users/TOGGLE_FOLLOWING',
    setCurrentPage: 'users/SET_CURRENT_PAGE',
    setTotalUsersCount: 'users/SET_TOTAL_USERS_COUNT',
    writeFindText: 'users/WRITE_FIND_TEXT',
    toggleFetching: 'TOGGLE_FETCHING',
    toggleFollowingProgress: 'users/TOGGLE_FOLLOWING_PROGRESS',
}

const initialState: InitialStateType = {
    usersData: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    findText: '',
    isFetching: false,
    followingInProgress: [],
}

const usersReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case actionTypes.setUsers:
            return {
                ...state,
                usersData: action.usersData
            }

        case actionTypes.toggleFollowing:
            return {
                ...state,
                usersData: state.usersData.map(item => {
                    if (item.id === action.userId) {
                        return {...item, followed: action.followed}
                    }
                    return {...item}
                })
            }

        case actionTypes.setCurrentPage:
            return {
                ...state,
                currentPage: action.pageNumber
            }

        case actionTypes.setTotalUsersCount:
            return {
                ...state,
                totalUsersCount: action.count
            }

        case actionTypes.toggleFetching:
            return {
                ...state,
                isFetching: action.isFetching
            }

        case actionTypes.writeFindText:
            return {
                ...state,
                findText: action.text
            }

        case actionTypes.toggleFollowingProgress:
            return {
                ...state,
                followingInProgress: action.isFollowing ?
                    [...state.followingInProgress, action.id]
                    :
                    state.followingInProgress.filter(id => id !== action.id)
            }

        default:
            return state
    }
}

export default usersReducer


export const setUsers = (usersData: User[]): SetUsersActionType => ({
    type: actionTypes.setUsers,
    usersData
})

export const toggleFollowingSuccess = (userId: number, followed: boolean): ToggleFollowingSuccessActionType => ({
    type: actionTypes.toggleFollowing,
    userId,
    followed
})

export const setCurrentPage = (pageNumber: number): SetCurrentPageActionType => ({
    type: actionTypes.setCurrentPage,
    pageNumber
})

export const setTotalUsersCount = (count: number): SetTotalUsersCountActionType => ({
    type: actionTypes.setTotalUsersCount,
    count
})

export const toggleFetching = (isFetching: boolean): ToggleFetchingActionType => ({
    type: actionTypes.toggleFetching,
    isFetching
})

export const toggleFollowingProgress = (isFollowing: boolean, id: number): ToggleFollowingProgressActionType => ({
    type: actionTypes.toggleFollowingProgress,
    isFollowing,
    id
})

export const writeFindText = (text: string): WriteFindTextActionType => ({
    type: actionTypes.writeFindText,
    text
})


export const getUsers = (pageSize: number, currentPage: number) => async (dispatch: any) => {
    dispatch(toggleFetching(true))
    dispatch(setCurrentPage(currentPage))

    const response = await usersApi.getUsers(pageSize, currentPage)

    dispatch(setUsers(response.items))
    dispatch(setTotalUsersCount(response.totalCount))
    dispatch(toggleFetching(false))
}

export const toggleFollowing = (id: number, follow: boolean) => async (dispatch: any) => {

    dispatch(toggleFollowingProgress(true, id))

    const response = await usersApi.toggleFollowing(id, follow)

    if (response.resultCode === 0) {
        dispatch(toggleFollowingSuccess(id, follow))
        dispatch(toggleFollowingProgress(false, id))
    }
}

export const find = (pageSize: number, findText: string) => async (dispatch: any) => {
    dispatch(toggleFetching(true))
    dispatch(setCurrentPage(1))

    const response = await usersApi.findUsers(pageSize, findText)

    dispatch(setUsers(response.items))
    dispatch(setTotalUsersCount(response.totalCount))
    dispatch(toggleFetching(false))
    dispatch(writeFindText(''))
}

