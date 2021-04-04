import React, { Component } from 'react';
import Header from './Header';
import { auth } from './../../redux/authReducer'
import { connect } from 'react-redux';

class HeaderContainer extends Component {

    componentDidMount = () => {
        this.props.auth();
    }

    render() {
        return (
            <Header {...this.props} />
        );
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default connect(mapStateToProps, { auth })(HeaderContainer);