import {TState} from '../../redux/store'

export const getAuthId = (state: TState) => state.auth.id
export const getIsAuth = (state: TState) => state.auth.isAuth
export const getLogin = (state: TState) => state.auth.login
export const getCaptchaUrl = (state: TState) => state.auth.captchaUrl