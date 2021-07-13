import {Redirect} from "react-router"
import {connect} from "react-redux"

const withAuthRedirect = (Component) => {

    const WrapperForRedirect = (props) => {
        if (!props.isAuth) return <Redirect to='/login' />

        return <Component {...props}/>
    }

    const mapStateToProps = (state) => ({
        isAuth: state.auth.isAuth,
    })

    return connect(mapStateToProps)(WrapperForRedirect)
}

export default withAuthRedirect