import {Redirect} from "react-router"
import {useSelector} from 'react-redux'
import {TState} from '../redux/store'
import React from 'react'

const withAuthRedirect = (Component: any) => {

    const WrapperForRedirect: React.FC = (props) => {
        const isAuth = useSelector((state: TState) => state.auth.isAuth)

        return isAuth ? <Component {...props}/> : <Redirect to='/login' />
    }

    return WrapperForRedirect
}

export default withAuthRedirect