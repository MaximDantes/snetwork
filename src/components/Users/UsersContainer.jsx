import { connect } from "react-redux";
import { followActionCreator, setCurrentPageActionCreator, setTotalUsersCountActionCreator, setUsersActonCreator, unfollowActionCreator, toggleFetchingActionCreator } from "../../redux/usersReducer";
import axios from 'axios';
import { Component } from 'react';
import Users from './Users';
import loader from './../../assets/images/loader.svg';


class UsersContainer extends Component {

    componentDidMount = () => {
        this.props.toggleFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
                this.props.toggleFetching(false);
            });
    }

    changePage = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= this.pagesCount) {
            this.props.toggleFetching(true);

            this.props.setCurrentPage(pageNumber);

            axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`)
                .then(response => {
                    this.props.setUsers(response.data.items);
                    this.props.toggleFetching(false);
                });
        }
    }

    render() {
        this.pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        return (
            <div> {
                this.props.isFetching
                    ?
                    <img src={loader} alt="loader" />
                    :
                    <Users
                        usersData={this.props.usersData}
                        totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        pagesCount={this.pagesCount}
                        currentPage={this.props.currentPage}
                        unfollow={this.props.unfollow}
                        follow={this.props.follow}
                        changePage={this.changePage}
                    />
            }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        usersData: state.users.usersData,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching,
    }
};

const mapDiapstchToProps = (dispatch) => ({
    follow: (userId) => {
        dispatch(followActionCreator(userId));
    },
    unfollow: (userId) => {
        dispatch(unfollowActionCreator(userId));
    },
    setUsers: (users) => {
        dispatch(setUsersActonCreator(users));
    },
    setCurrentPage: (pageNumber) => {
        dispatch(setCurrentPageActionCreator(pageNumber));
    },
    setTotalUsersCount: (count) => {
        dispatch(setTotalUsersCountActionCreator(count));
    },
    toggleFetching: (isFetching) => {
        dispatch(toggleFetchingActionCreator(isFetching));
    }
});
export default connect(mapStateToProps, mapDiapstchToProps)(UsersContainer);
