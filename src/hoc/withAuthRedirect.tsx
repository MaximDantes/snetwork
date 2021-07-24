import {Redirect} from "react-router"
import {connect} from "react-redux"
import {TState} from '../redux/store'
import React from 'react'

const withAuthRedirect = (Component: any) => {

    const WrapperForRedirect: React.FC< {isAuth: boolean} > = (props) => {
        if (!props.isAuth) return <Redirect to='/login' />

        return <Component {...props}/>
    }

    const mapStateToProps = (state: TState) => ({
        isAuth: state.auth.isAuth,
    })

    return connect(mapStateToProps)(WrapperForRedirect)
}

export default withAuthRedirect