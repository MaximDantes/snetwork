import {usersApi} from '../api/api'

const actionTypes = {
    setUsers: 'users/SET_USERS',
    toggleFollowing: 'users/TOGGLE_FOLLOWING',
    setCurrentPage: 'users/SET_CURRENT_PAGE',
    setTotalUsersCount: 'users/SET_TOTAL_USERS_COUNT',
    writeFindText: 'users/WRITE_FIND_TEXT',
    toggleFetching: 'TOGGLE_FETCHING',
    toggleFollowingProgress: 'users/TOGGLE_FOLLOWING_PROGRESS',
}

const initialState = {
    usersData: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    findText: '',
    isFetching: false,
    followingInProgress: [],
}

const usersReducer = (state = initialState, action) => {
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


export const setUsers = (usersData) => ({
    type: actionTypes.setUsers,
    usersData
})

export const toggleFollowingSuccess = (userId, followed) => ({
    type: actionTypes.toggleFollowing,
    userId,
    followed
})

export const setCurrentPage = (pageNumber) => ({
    type: actionTypes.setCurrentPage,
    pageNumber
})

export const setTotalUsersCount = (count) => ({
    type: actionTypes.setTotalUsersCount,
    count
})

export const toggleFetching = (isFetching) => ({
    type: actionTypes.toggleFetching,
    isFetching
})

export const toggleFollowingProgress = (isFollowing, id) => ({
    type: actionTypes.toggleFollowingProgress,
    isFollowing,
    id
})

export const writeFindText = (text) => ({
    type: actionTypes.writeFindText,
    text
})


export const getUsers = (pageSize, currentPage) => async (dispatch) => {
    dispatch(toggleFetching(true))
    dispatch(setCurrentPage(currentPage))

    const response = await usersApi.getUsers(pageSize, currentPage)

    dispatch(setUsers(response.items))
    dispatch(setTotalUsersCount(response.totalCount))
    dispatch(toggleFetching(false))
}

export const toggleFollowing = (id, follow) => async (dispatch) => {

    dispatch(toggleFollowingProgress(true, id))

    const response = await usersApi.toggleFollowing(id, follow)

    if (response.resultCode === 0) {
        dispatch(toggleFollowingSuccess(id, follow))
        dispatch(toggleFollowingProgress(false, id))
    }
}

export const find = (pageSize, findText) => async (dispatch) => {
    dispatch(toggleFetching(true))
    dispatch(setCurrentPage(1))

    const response = await usersApi.findUsers(pageSize, findText)

    dispatch(setUsers(response.items))
    dispatch(setTotalUsersCount(response.totalCount))
    dispatch(toggleFetching(false))
    dispatch(writeFindText(''))
}

