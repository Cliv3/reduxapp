import {supabase} from '../../supabaseClient.tsx'
import * as AuthActionTypes from '../AuthActions.ts';

export const authObserver = (dispatch) => {
    supabase.auth.onAuthStateChange((_event, payload) => {

        if (payload) {
            dispatch({
                type: AuthActionTypes.SIGNIN_USER_SUCCESS,
                payload: payload.user
            });
        }
        else {
            dispatch({
                type: AuthActionTypes.SIGNOUT_USER_SUCCESS,
                payload: null
            });
        }
    });
};

export const signInAction = async (dispatch) => {
    dispatch({ type: AuthActionTypes.SIGNIN_USER_REQUEST });
    try {
        await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: 'http://localhost:5173/'
            }
        });
    }
    catch (err) {
        dispatch({
            type: AuthActionTypes.SIGNIN_USER_ERROR,
            err
        });
    }
};

export const signOutAction = async (dispatch) => {
    dispatch({ type: AuthActionTypes.SIGNOUT_USER_REQUEST });
    try {
        await supabase.auth.signOut()
    }
    catch (err) {
        dispatch({
            type: AuthActionTypes.SIGNOUT_USER_ERROR,
            err
        });
    }
};