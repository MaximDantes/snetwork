import axios from 'axios';
import { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { setProfile, toggleFetching } from '../../redux/profileReducer';
import Preloader from '../common/Preloader/Preloader';
import Profile from './Profile';

class ProfileContainer extends Component {

    componentDidMount = () => {
        let id = this.props.match.params.id;
        if (!id) {
            id = this.props.id;
        }
        this.props.toggleFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
            .then(response => {
                this.props.setProfile(response.data);
                this.props.toggleFetching(false);
            });
    }

    render() {
        return (
            <>
                {
                    this.props.isFetching
                        ?
                        <Preloader />
                        :
                        <Profile {...this.props} />
                }
            </>
        );
    }
}

const mapStateToProps = (state) => ({
    profileInfo: state.profile.profileInfoData,
    isFetching: state.profile.isFetching,
    id: state.auth.id,
});

const ProfileContainerWithURLData = withRouter(ProfileContainer)

export default connect(mapStateToProps, { setProfile, toggleFetching })(ProfileContainerWithURLData);
