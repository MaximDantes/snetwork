import {createSelector} from 'reselect'

const getUsersDataSelector = (state) => state.users.usersData

export const getUsersData = createSelector(getUsersDataSelector, (usersData) => {
    return usersData.filter(x => true)
})

export const getPageSize = (state) => state.users.pageSize

export const getTotalUsersCount = (state) => state.users.totalUsersCount

export const getCurrentPage = (state) => state.users.currentPage

export const getFindText = (state) => state.users.findText

export const getIsFetching = (state) => state.users.isFetching

export const getFollowingInProgress = (state) => state.users.followingInProgress