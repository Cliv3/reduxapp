import { combineReducers } from 'redux';
 import authReducer from './Auth';
import postsReducer from "./PostsReducer.ts";

const rootReducer = combineReducers({
    auth: authReducer,
    posts: postsReducer
});

export default rootReducer;