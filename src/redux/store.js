import { combineReducers, createStore } from "redux";
import { dialogsReducer } from "./dialogsReducer";
import { friendsReducer } from "./friendsReducer";
import { profileReducer } from "./profileReducer";

const reducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    firends: friendsReducer
});

const store = createStore(reducers);

export default store;
