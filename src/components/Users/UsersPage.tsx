import {useDispatch, useSelector} from 'react-redux'
import React, {useEffect} from 'react'
import {getUsers, TFilter, toggleFollowing, toggleFollowingProgress} from '../../store/usersReducer'
import Users from './Users'
import Preloader from '../common/Preloader/Preloader'
import {
    getCurrentPage, getFilter,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsersData
} from '../../utils/selectors/users-selectors'
import useRedirect from '../../hooks/useRedirect'
import {useHistory} from 'react-router-dom'
import * as queryString from 'querystring'
import UsersFind from './UsersFind'

const UsersPage: React.FC = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const isFetching = useSelector(getIsFetching)
    const usersData = useSelector(getUsersData)
    const totalUsersCount = useSelector(getTotalUsersCount)
    const pageSize = useSelector(getPageSize)
    const currentPage = useSelector(getCurrentPage)
    const followingInProgress = useSelector(getFollowingInProgress)
    const filter = useSelector(getFilter)

    const pagesCount = Math.ceil(totalUsersCount / pageSize)

    const find = (filter: TFilter) => {
        dispatch(getUsers(10, 1, filter))
    }

    const changePageProps = (pageNumber: number) => {
        if (pageNumber >= 1 && pageNumber <= pagesCount) {
            dispatch(getUsers(pageSize, pageNumber, filter))
        }
    }
    const getUsersProps = (pageSize: number, pageNumber: number, filter: TFilter) => {
        dispatch(getUsers(pageSize, pageNumber, filter))
    }
    const toggleFollowingProps = (id: number, follow: boolean) => dispatch(toggleFollowing(id, follow))
    const toggleFollowingProgressProps = (isFollowing: boolean, id: number) => dispatch(toggleFollowingProgress(isFollowing, id))

    useEffect(() => {
        const search = queryString.parse(history.location.search.substr(1))

        let actualFilter = filter
        let actualPage = currentPage

        if (search.page) actualPage = +search.page
        if (search.term) actualFilter = {...actualFilter, term: search.term as string}
        if (search.friend) actualFilter = {...actualFilter, friend: search.friend === 'true'}

        dispatch(getUsers(pageSize, actualPage, actualFilter))
    }, [])


    useEffect(() => {
        const term = filter.term ? `?term=${filter.term}` : ''
        let friend = filter.friend === null ? '' : filter.friend ? `friend=true` : `friend=false`
        let page = `page=${currentPage}`
        if (!term && friend) friend = `?${friend}`
        if (term && friend) friend = `&${friend}`
        if (term || friend) {
            page = `&${page}`
        } else {
            page = `?${page}`
        }

        const searchString = `${term}${friend}${page}`

        history.push({
            pathname: '/users',
            search: searchString
        })
    }, [filter, currentPage])

    useRedirect('/login')

    return <>
        <UsersFind find={find} filter={filter}/>

        {
            isFetching
                ?
                <Preloader/>
                :
                <Users isFetching={isFetching}
                       usersData={usersData}
                       totalUsersCount={totalUsersCount}
                       pageSize={pageSize}
                       pagesCount={pagesCount}
                       currentPage={currentPage}
                       filter={filter}
                       followingInProgress={followingInProgress}
                       toggleFollowing={toggleFollowingProps}
                       changePage={changePageProps}
                       getUsers={getUsersProps}
                       toggleFollowingProgress={toggleFollowingProgressProps}
                />
        }
    </>
}

export default UsersPage
