import { authApi } from "../api/api";

const actionTypes = {
    setUser: 'SET_USER',
    unsetUser: 'UNSET_USER',
};

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}

export const authReducer = (state = initialState, action) => {
    switch(action.type) {

        case actionTypes.setUser:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            };

        case actionTypes.unsetUser:
            return {
                ...state,
                id: null,
                email: null,
                login: null,
                isAuth: false,
            }

        default:
            return state;
    }
}

export const setUser = (id, email, login) => ({
    type: actionTypes.setUser,
    data: {
        id, email, login
    }
});
export const unsetUser = () => ({
    type: actionTypes.unsetUser
});

export const auth = () => {
    return (dispatch) => {
        authApi.setUser()
            .then(response => {
                if (response.resultCode === 0) {
                    const { id, email, login } = response.data;

                    dispatch(setUser(id, email, login));
                }
            });
    }
};
export const login = (login, password, rememberMe) => {
    return (dispatch) => {
        authApi.login(login, password, rememberMe)
            .then(response => {
                if (response.resultCode === 0) {
                    dispatch(auth());
                }
            })
    }
}
export const logout = () => {
    return (dispatch) => {
        authApi.logout()
            .then(response => {
                if (response.resultCode === 0){
                    debugger
                    dispatch(unsetUser())
                }
            })
    }
}