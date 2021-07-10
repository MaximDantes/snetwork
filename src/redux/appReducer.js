//import { authApi } from "../api/api";

import {auth} from "./authReducer";

const actionTypes = {
    setInitialized: 'SET_INITIALIZED',
}

const initialState = {
    initialized: false,
}

export const appReducer = (state = initialState, action) => {
    switch(action.type) {

        case actionTypes.setInitialized:
            return {
                ...state,
                initialized: true
            }

        default:
            return state
    }
}

export const setInitialized = () => ({
    type: actionTypes.setInitialized
})

export const initiailzeApp = () => (dispatch) => {
    const promise = dispatch(auth())
    Promise.all([promise])
        .then(() => {
            dispatch(setInitialized())
        })
}