import { connect } from "react-redux";
import { Component } from 'react';
import {
    follow, setCurrentPage, setTotalUsersCount,
    setUsers, unfollow, toggleFetching,
    writeFindText, toggleFollowingProgress, getUsers,
    find,
} from "../../redux/usersReducer";
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class UsersContainer extends Component {

    componentDidMount = () => {
        this.props.getUsers(this.props.pageSize, this.props.currentPage);
    }

    changePage = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= this.pagesCount) {            
            this.props.getUsers(this.props.pageSize, pageNumber);
        }
    }

    find = () => {
        if (this.props.findText) {
            this.props.find(this.props.pageSize, this.props.findText);
        }
    }

    render() {
        this.pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
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
                        unfollow={this.props.unfollow}
                        follow={this.props.follow}
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

const mapStateToProps = (state) => ({
        usersData: state.users.usersData,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage,
        findText: state.users.findText,
        isFetching: state.users.isFetching,
        followingInProgress: state.users.followingInProgress,
});

export default compose(
    connect(mapStateToProps, {
        follow, unfollow, setUsers, setCurrentPage,
        setTotalUsersCount, toggleFetching, writeFindText,
        toggleFollowingProgress, getUsers, find,
    }),
    withAuthRedirect
)(UsersContainer);

