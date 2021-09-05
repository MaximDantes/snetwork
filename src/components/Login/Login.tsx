import {useDispatch, useSelector} from 'react-redux'
import {signIn} from '../../redux/authReducer'
import {Redirect} from 'react-router'
import LoginForm from './LoginForm'
import React from 'react'
import {getIsAuth, getCaptchaUrl} from '../../utils/selectors/auth-selectors'

export type TLoginFormData = {
    login: string
    password: string
    rememberMe: boolean
    captcha?: string
}

const Login: React.FC = () => {

    const dispatch = useDispatch()

    const isAuth = useSelector(getIsAuth)
    const captchaUrl = useSelector(getCaptchaUrl)

    const signInProps = (login: string, password: string, rememberMe: boolean, captcha?: string) => {
        dispatch(signIn(login, password, rememberMe, captcha))
    }

    const onSubmitHandler = (formData: TLoginFormData) => {
        signInProps(formData.login, formData.password, formData.rememberMe, formData.captcha);
    }

    if (isAuth) return <Redirect to={'/profile'} />

    return <LoginForm onSubmitHandler={onSubmitHandler} captchaUrl={captchaUrl}/>
}

export default Login;