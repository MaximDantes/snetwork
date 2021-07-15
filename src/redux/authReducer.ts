import {authApi} from '../api/api'

type InitialStateType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}
type SetUserActionType = {
    type: typeof actionTypes.setUser,
    data: {
        id: number,
        email: string,
        login: string
    }
}
type UnsetUserActionType = {
    type: typeof actionTypes.unsetUser
}

const actionTypes = {
    setUser: 'auth/SET_USER',
    unsetUser: 'auth/UNSET_USER',
}

const initialState: InitialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}

export const authReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case actionTypes.setUser:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }

        case actionTypes.unsetUser:
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

export const setUser = (id: number, email: string, login: string): SetUserActionType => ({
    type: actionTypes.setUser,
    data: {
        id, email, login
    }
})

export const unsetUser = (): UnsetUserActionType => ({
    type: actionTypes.unsetUser
})

export const auth = () => async (dispatch: any) => {
    const response = await authApi.setUser()

    if (response.resultCode === 0) {
        const {id, email, login} = response.data
        dispatch(setUser(id, email, login))
    }
}

export const login = (login: string, password: string, rememberMe: boolean) => async (dispatch: any) => {
    const response = await authApi.login(login, password, rememberMe)

    if (response.resultCode === 0) {
        dispatch(auth())
    }
}

export const logout = () => async (dispatch: any) => {
    const response = await authApi.logout()

    if (response.resultCode === 0) {
        dispatch(unsetUser())
    }
}