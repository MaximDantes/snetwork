import {createSelector} from 'reselect'
import {TState} from '../../store/store'

const getUsersDataSelector = (state: TState) => state.users.usersData

export const getUsersData = createSelector(getUsersDataSelector, (usersData) => {
    return usersData.filter(x => true)
})

export const getPageSize = (state: TState) => state.users.pageSize

export const getTotalUsersCount = (state: TState) => state.users.totalUsersCount

export const getCurrentPage = (state: TState) => state.users.currentPage

export const getIsFetching = (state: TState) => state.users.isFetching

export const getFollowingInProgress = (state: TState) => state.users.followingInProgress

export const getFilter = (state: TState) => state.users.filter