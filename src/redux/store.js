import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { authReducer } from "./authReducer";
import { dialogsReducer } from "./dialogsReducer";
import { friendsReducer } from "./friendsReducer";
import { profileReducer } from "./profileReducer";
import usersReducer from "./usersReducer";
import { reducer as formReducer} from "redux-form";

const reducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    users: usersReducer,
    friends: friendsReducer,
    auth: authReducer,
    form: formReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;

window.store = store;