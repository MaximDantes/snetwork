import {authApi, ResultCodes, securityApi} from '../api/api'
import {ThunkAction} from 'redux-thunk'
import {TState} from './store'

type TInitialState = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    captchaUrl: string | null
}

type TThunkResult<T> = ThunkAction<T, TState, undefined, TActions>
type TActions = ReturnType<typeof setUser> | ReturnType<typeof unsetUser> | ReturnType<typeof setCaptchaUrl>

const initialState: TInitialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}

export const authReducer = (state = initialState, action: TActions): TInitialState => {
    switch (action.type) {
        case 'auth/SET_USER':
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }

        case 'auth/UNSET_USER':
            return {
                ...state,
                id: null,
                email: null,
                login: null,
                isAuth: false,
            }

        case 'auth/SET_CAPTCHA_URL':
            return {
                ...state,
                captchaUrl: action.url
            }

        default:
            return state
    }
}

export const setUser = (id: number, email: string, login: string) => ({
    type: 'auth/SET_USER',
    data: {
        id, email, login
    }
} as const)

export const unsetUser = () => ({
    type: 'auth/UNSET_USER'
} as const)

const setCaptchaUrl = (url: string) => ({
    type: 'auth/SET_CAPTCHA_URL',
    url
} as const)

export const auth= (): TThunkResult<void> => async (dispatch) => {
    const response = await authApi.setUser()

    if (response.resultCode === ResultCodes.Success) {
        const {id, email, login} = response.data
        dispatch(setUser(id, email, login))
    }
}

export const login = (login: string, password: string, rememberMe: boolean, captcha?: string): TThunkResult<void> => async (dispatch) => {
    const response = await authApi.login(login, password, rememberMe, captcha)

    if (response.resultCode === ResultCodes.Success) {
        dispatch(auth())
    }
    if (response.resultCode === ResultCodes.CaptchaRequired) {
        dispatch(getCaptchaUrl())
    }

}

export const logout = (): TThunkResult<void> => async (dispatch) => {
    const response = await authApi.logout()

    if (response.resultCode === ResultCodes.Success) {
        dispatch(unsetUser())
    }
}


export const getCaptchaUrl = (): TThunkResult<void>  => async (dispatch) => {
    const response = await securityApi.getCaptchaUrl()

    dispatch(setCaptchaUrl(response.url))
}
