import {authApi} from '../api/api'

const actionTypes = {
    setUser: 'auth/SET_USER',
    unsetUser: 'auth/UNSET_USER',
}

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}

export const authReducer = (state = initialState, action) => {
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

export const setUser = (id, email, login) => ({
    type: actionTypes.setUser,
    data: {
        id, email, login
    }
})

export const unsetUser = () => ({
    type: actionTypes.unsetUser
})

export const auth = () => async (dispatch) => {
    const response = await authApi.setUser()

    if (response.resultCode === 0) {
        const {id, email, login} = response.data
        dispatch(setUser(id, email, login))
    }
}

export const login = (login, password, rememberMe) => async (dispatch) => {
    const response = await authApi.login(login, password, rememberMe)

    if (response.resultCode === 0) {
        dispatch(auth())
    }
}

export const logout = () => async (dispatch) => {
    const response = await authApi.logout()

    if (response.resultCode === 0) {
        dispatch(unsetUser())
    }
}