import {authApi, ResultCodes} from '../api/api'

type TInitialState = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}
type TSetUserAction = {
    type: 'auth/SET_USER',
    data: {
        id: number,
        email: string,
        login: string
    }
}
type TUnsetUserAction = {
    type: 'auth/UNSET_USER'
}
type TActions = TSetUserAction | TUnsetUserAction

const initialState: TInitialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}

export const authReducer = (state: TInitialState = initialState, action: TActions): TInitialState => {
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

        default:
            return state
    }
}

export const setUser = (id: number, email: string, login: string): TSetUserAction => ({
    type: 'auth/SET_USER',
    data: {
        id, email, login
    }
})

export const unsetUser = (): TUnsetUserAction => ({
    type: 'auth/UNSET_USER'
})

export const auth = () => async (dispatch: any) => {
    const response = await authApi.setUser()

    if (response.resultCode === ResultCodes.Success) {
        const {id, email, login} = response.data
        dispatch(setUser(id, email, login))
    }
}

export const login = (login: string, password: string, rememberMe: boolean) => async (dispatch: any) => {
    const response = await authApi.login(login, password, rememberMe)

    if (response.resultCode === ResultCodes.Success) {
        dispatch(auth())
    }
}

export const logout = () => async (dispatch: any) => {
    const response = await authApi.logout()

    if (response.resultCode === ResultCodes.Success) {
        dispatch(unsetUser())
    }
}