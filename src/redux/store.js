import { combineReducers, createStore } from "redux";
import { dialogsReducer } from "./dialogsReducer1";
import { friendsReducer } from "./friendsReducer";
import { profileReducer } from "./profileReducer";
import usersReducer from "./usersReducer";

const reducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    users: usersReducer,
    firends: friendsReducer
});

const store = createStore(reducers);

export default store;

window.store = store;