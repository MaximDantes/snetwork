import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddelware from "redux-thunk";
import { authReducer } from "./authReducer";
import { dialogsReducer } from "./dialogsReducer1";
import { friendsReducer } from "./friendsReducer";
import { profileReducer } from "./profileReducer";
import usersReducer from "./usersReducer";

const reducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    users: usersReducer,
    friends: friendsReducer,
    auth: authReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddelware));

export default store;

window.store = store;