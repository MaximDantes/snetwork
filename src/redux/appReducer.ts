import {auth} from "./authReducer";

type TAction = ReturnType<typeof setInitialized>

const initialState = {
    initialized: false,
}

export const appReducer = (state = initialState, action: TAction): typeof initialState => {
    switch(action.type) {

        case 'app/SET_INITIALIZED':
            return {
                ...state,
                initialized: true,
            }

        default:
            return state
    }
}

const setInitialized = () => ({
    type: 'app/SET_INITIALIZED'
})

export const initializeApp = () => (dispatch: any) => {
    const promise = dispatch(auth())
    Promise.all([promise])
        .then(() => {
            dispatch(setInitialized())
        })
}