import { connect } from "react-redux"
import { Component } from 'react'
import {
    setCurrentPage, setTotalUsersCount,
    setUsers, toggleFetching,
    writeFindText, toggleFollowingProgress, getUsers,
    find, toggleFollowing
} from "../../redux/usersReducer"
import Users from './Users'
import Preloader from "../common/Preloader/Preloader"
import withAuthRedirect from "../../hoc/withAuthRedirect"
import {compose} from "redux"
import {
    getCurrentPage,
    getFindText, getFollowingInProgress, getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsersData
} from "../../utils/selectors/selectors"

class UsersContainer extends Component {

    componentDidMount = () => {
        this.props.getUsers(this.props.pageSize, this.props.currentPage)
    }

    changePage = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= this.pagesCount) {            
            this.props.getUsers(this.props.pageSize, pageNumber)
        }
    }

    find = () => {
        if (this.props.findText) {
            this.props.find(this.props.pageSize, this.props.findText)
        }
    }

    render() {
        this.pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        return (
            <div> {
                this.props.isFetching
                    ?
                    <Preloader />
                    :
                    <Users
                        usersData={this.props.usersData}
                        totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        pagesCount={this.pagesCount}
                        currentPage={this.props.currentPage}
                        followingInProgress={this.props.followingInProgress}
                        findText={this.props.findText}
                        toggleFollowing={this.props.toggleFollowing}
                        changePage={this.changePage}
                        writeFindText={this.props.writeFindText}
                        find={this.find}
                        toggleFollowingProgress={this.props.toggleFollowingProgress}
                    />
            }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        usersData: getUsersData(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        findText: getFindText(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose(
    connect(mapStateToProps, {
        setUsers, setCurrentPage,
        setTotalUsersCount, toggleFetching, writeFindText,
        toggleFollowingProgress, getUsers, find,
        toggleFollowing,
    }),
    withAuthRedirect
)(UsersContainer)

