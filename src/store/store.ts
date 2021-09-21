import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {authReducer} from './authReducer'
import {dialogsReducer} from './dialogsReducer'
import {profileReducer} from './profile/profile-reducer'
import usersReducer from './usersReducer'
import {reducer as formReducer} from 'redux-form'
import {appReducer} from './appReducer'

const rootReducer = combineReducers({
    app: appReducer,
    profile: profileReducer,
    dialogs: dialogsReducer,
    users: usersReducer,
    auth: authReducer,
    form: formReducer,
})

// store devtools connect
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store

type RootReducer = typeof rootReducer
export type TState = ReturnType<RootReducer>
