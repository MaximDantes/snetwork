const actionTypes = {
    setUsers: 'SET_USERS',
    follow: 'FOLLOW',
    unfollow: 'UNFOLLOW',
    setCurrentPage: 'SET_CURRENT_PAGE',
    setTotalUsersCount: 'SET_TOTAL_USERS_COUNT',
    toggleFetching: 'TOGGLE_FETCHING',
};

const initialState = {
    usersData: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
};

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

        default:
            return state;
    }
};

export default usersReducer;

export const setUsersActonCreator = (usersData) => ({
    type: actionTypes.setUsers,
    usersData
});
export const followActionCreator = (userId) => ({
    type: actionTypes.follow,
    userId
});
export const unfollowActionCreator = (userId) => ({
    type: actionTypes.unfollow,
    userId
});
export const setCurrentPageActionCreator = (pageNumber) => ({
    type: actionTypes.setCurrentPage,
    pageNumber
});
export const setTotalUsersCountActionCreator = (count) => ({
    type: actionTypes.setTotalUsersCount,
    count
});
export const toggleFetchingActionCreator = (isFetching) => ({
    type: actionTypes.toggleFetching,
    isFetching
});
