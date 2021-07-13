import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import thunkMiddleware from "redux-thunk"
import { authReducer } from "./authReducer"
import { dialogsReducer } from "./dialogsReducer"
import { friendsReducer } from "./friendsReducer"
import { profileReducer } from "./profileReducer"
import usersReducer from "./usersReducer"
import { reducer as formReducer} from "redux-form"
import {appReducer} from "./appReducer"

const reducers = combineReducers({
    app: appReducer,
    profile: profileReducer,
    dialogs: dialogsReducer,
    users: usersReducer,
    friends: friendsReducer,
    auth: authReducer,
    form: formReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store
