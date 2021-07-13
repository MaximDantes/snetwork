import { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {getProfile, getStatus, updateStatus} from '../../redux/profileReducer';
import Preloader from '../common/Preloader/Preloader';
import Profile from './Profile';
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {logout} from "../../redux/authReducer";

class ProfileContainer extends PureComponent {

    componentDidMount = () => {
        let id = this.props.match.params.id;
        if (!id) {
            id = this.props.id;
        }
        this.props.getStatus(id);
        this.props.getProfile(id);
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
    status: state.profile.status,
    isFetching: state.profile.isFetching,
    id: state.auth.id,
});

export default compose(
    connect(mapStateToProps, { getProfile, getStatus, updateStatus, logout }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
