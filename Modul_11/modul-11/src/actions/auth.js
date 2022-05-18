import { myFirebase } from '../firebase/firebase';

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

export const VERTIFY_REQUEST = "VERTIFY_REQUEST";
export const VERTIFY_SUCCESS = "VERTIFY_SUCCESS";

const requestLogin = () => {
    return {
        type: LOGIN_REQUEST
    };
};

const receiveLogin = user => {
    return {
        type: LOGIN_SUCCESS,
        user
    };
};

const loginError = () => {
    return {
        type: LOGIN_FAILURE
    };
};

const requestLogout = () => {
    return {
        type: LOGOUT_REQUEST
    };
};

const receiveLogout = () => {
    return {
        type: LOGOUT_SUCCESS,
    };
};

const logoutError = () => {
    return {
        type: LOGOUT_FAILURE
    };
};

const vertifyRequest = () => {
    return {
        type: VERTIFY_REQUEST
    };
};

const vertifySuccess = () => {
    return {
        type: VERTIFY_SUCCESS
    };
};

export const loginUser = (email, password) => dispatch => {
    dispatch(requestLogin());
    myFirebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(user => {
            dispatch(loginUser(user));
        })
        .catch(error => {
            dispatch(loginError());
        })
}

export const logoutUser = () => dispatch => {
    dispatch(requestLogout());
    myFirebase
        .auth()
        .signOut()
        .then(res => {
            dispatch(receiveLogout());
        })
        .catch(error => {
            dispatch(logoutError());
        })
}

export const vertifyAuth = () => dispatch => {
    dispatch(vertifyRequest());
    myFirebase.auth().onAuthStateChanged(user => {
        if (user != null) {
            dispatch(receiveLogin());
        }
        dispatch(vertifySuccess());
    })
}




