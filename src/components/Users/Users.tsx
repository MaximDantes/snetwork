import style from './Users.module.css'
import Paginator from '../common/Paginator/Paginator'
import User from './User'
import {TUser} from '../../types/types'
import React from 'react'
import UsersFind from './UsersFind'
import {TFilter} from '../../redux/usersReducer'

type TProps = {
    currentPage: number
    pagesCount: number
    usersData: TUser[]
    totalUsersCount: number
    pageSize: number
    followingInProgress: number[]
    filter: TFilter
    toggleFollowing(id: number, follow: boolean): void
    toggleFollowingProgress(isFollowing: boolean, id: number): void
    getUsers(pageSize: number, pageNumber: number, filter: TFilter): void
    changePage(pageNumber: number): void
}

const Users: React.FC<TProps> = (props) => {

    const find = (filter: TFilter) => {
        props.getUsers(10, 1, filter)
    }

    return (
        <div className={style.users}>

            <UsersFind find={find} filter={props.filter}/>

            <div className={style.nav}>
                <Paginator currentPage={props.currentPage} pagesCount={props.pagesCount} changePage={props.changePage}/>
            </div>

            {props.usersData.map(item =>
                <User
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    status={item.status}
                    photos={item.photos}
                    followed={item.followed}
                    followingInProgress={props.followingInProgress}
                    toggleFollowing={props.toggleFollowing}
                />
            )}
        </div>
    )
}

export default Users
