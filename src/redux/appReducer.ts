import {auth} from "./authReducer";

export type InitialStateType = {
    initialized: boolean
}
type SetInitializedActionType = {
    type: typeof actionTypes.setInitialized
}


const actionTypes = {
    setInitialized: 'app/SET_INITIALIZED',
}
const initialState: InitialStateType = {
    initialized: false,
}

export const appReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    switch(action.type) {

        case actionTypes.setInitialized:
            return {
                ...state,
                initialized: true,
            }

        default:
            return state
    }
}

export const setInitialized = (): SetInitializedActionType => ({
    type: actionTypes.setInitialized
})

export const initiailzeApp = () => (dispatch: any) => {
    const promise = dispatch(auth())
    Promise.all([promise])
        .then(() => {
            dispatch(setInitialized())
        })
}