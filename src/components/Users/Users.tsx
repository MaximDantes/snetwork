import Paginator from '../common/Paginator/Paginator'
import User from './User'
import {TUser} from '../../types/types'
import React from 'react'
import UsersFind from './UsersFind'
import {TFilter} from '../../store/usersReducer'
import styled from 'styled-components'

type TProps = {
    isFetching: boolean
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

const StyledDiv = styled.div`
    padding: 10px 0;
    
    .nav {
        display: flex;
        width: 100%;
        margin: 10px;
    }

    input, select {
        margin: 5px;
        font-size: 20px;
    }
`

const Users: React.FC<TProps> = (props) => {

    return (
        <StyledDiv>
            {
                props.usersData.map(item =>
                    <User key={item.id}
                          id={item.id}
                          name={item.name}
                          status={item.status}
                          photos={item.photos}
                          followed={item.followed}
                          followingInProgress={props.followingInProgress}
                          toggleFollowing={props.toggleFollowing}
                    />
                )}

            <div className={'nav'}>
                <Paginator currentPage={props.currentPage} pagesCount={props.pagesCount} changePage={props.changePage}/>
            </div>
        </StyledDiv>
    )
}

export default Users
