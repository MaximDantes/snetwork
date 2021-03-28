import { usersApi } from "../api/api";

const actionTypes = {
    setUsers: 'SET_USERS',
    follow: 'FOLLOW',
    unfollow: 'UNFOLLOW',
    setCurrentPage: 'SET_CURRENT_PAGE',
    setTotalUsersCount: 'SET_TOTAL_USERS_COUNT',
    writeFindText: 'WRITE_FIND_TEXT',
    toggleFetching: 'TOGGLE_FETCHING',
    toggleFolowingProgress: 'TOGGLE_FOLLOWING_PROGRESS',
};

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
            };

        case actionTypes.follow:
            return {
                ...state,
                usersData: state.usersData.map(item => {
                    if (item.id === action.userId) {
                        return { ...item, followed: true };
                    }
                    return { ...item }
                })
            };

        case actionTypes.unfollow:
            return {
                ...state,
                usersData: state.usersData.map(item => {
                    if (item.id === action.userId) {
                        return { ...item, followed: false };
                    }
                    return { ...item }
                })
            };

        case actionTypes.setCurrentPage:
            return {
                ...state,
                currentPage: action.pageNumber
            };

        case actionTypes.setTotalUsersCount:
            return {
                ...state,
                totalUsersCount: action.count
            };

        case actionTypes.toggleFetching:
            return {
                ...state,
                isFetching: action.isFetching
            };

        case actionTypes.writeFindText:
            return {
                ...state,
                findText: action.text
            };

        case actionTypes.toggleFolowingProgress:
            return {
                ...state,
                followingInProgress: action.isFollowing ?
                    [...state.followingInProgress, action.id]
                    :
                    state.followingInProgress.filter(id => id !== action.id)
            };

        default:
            return state;
    }
};

export default usersReducer;


//action creators
export const setUsers = (usersData) => ({
    type: actionTypes.setUsers,
    usersData
});
export const followSuccess = (userId) => ({
    type: actionTypes.follow,
    userId
});
export const unfollowSuccess = (userId) => ({
    type: actionTypes.unfollow,
    userId
});
export const setCurrentPage = (pageNumber) => ({
    type: actionTypes.setCurrentPage,
    pageNumber
});
export const setTotalUsersCount = (count) => ({
    type: actionTypes.setTotalUsersCount,
    count
});
export const toggleFetching = (isFetching) => ({
    type: actionTypes.toggleFetching,
    isFetching
});
export const toggleFollowingProgress = (isFollowing, id) => ({
    type: actionTypes.toggleFolowingProgress,
    isFollowing,
    id
});
export const writeFindText = (text) => ({
    type: actionTypes.writeFindText,
    text
});

//thunk creators
export const getUsers = (pageSize, currentPage) => {
    return (dispatch) => {
        dispatch(toggleFetching(true));
        dispatch(setCurrentPage(currentPage));
        usersApi.getUsers(pageSize, currentPage)
            .then(response => {
                dispatch(setUsers(response.items));
                dispatch(setTotalUsersCount(response.totalCount));
                dispatch(toggleFetching(false));
            });
    }
};
export const follow = (id) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, id));
        usersApi.follow(id)
            .then(response => {
                if (response.resultCode === 0) {
                    dispatch(followSuccess(id));
                    dispatch(toggleFollowingProgress(false, id));
                }
            })
    }
};
export const unfollow = (id) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, id));
        usersApi.unfollow(id)
            .then(response => {
                if (response.resultCode === 0) {
                    dispatch(unfollowSuccess(id));
                    dispatch(toggleFollowingProgress(false, id));
                }
            })
    }
};
export const find = (pageSize, findText) => {
    return (dispatch) => {
        dispatch(toggleFetching(true));

        dispatch(setCurrentPage(1));

        usersApi.findUsers(pageSize, findText)
            .then(response => {
                dispatch(setUsers(response.items));
                dispatch(setTotalUsersCount(response.totalCount));
                dispatch(toggleFetching(false));
            });
        dispatch(writeFindText(''));
    }
};

