import { authApi } from "../api/api";

const actionTypes = {
    setUser: 'SET_USER',
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