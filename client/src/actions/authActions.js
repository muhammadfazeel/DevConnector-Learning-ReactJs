import axios from 'axios';
import { GET_ERRORS, SET_CURRENT_USER } from './types';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';

// Register

export const registerUser = (userData, history) => dispatch => {
    axios.post('/api/users/register', userData)
        .then(res => {
            history.push('/login')
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
}

//Login - Get User TOken
export const loginUser = userData => dispatch => {
    axios.post('/api/users/login', userData)
        .then(res => {
            //save to local storage
            const { token } = res.data;
            //Set token to local Storage
            localStorage.setItem('jwtToken', token);
            //set token to auth header
            setAuthToken(token);
            //Decode token to get data
            const decoded = jwt_decode(token);
            //set current user
            dispatch(setCurrentUser(decoded));

        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
}

//set logged in user

export const setCurrentUser = (decoded) => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}

//log user Out

export const logoutUser = () => dispatch => {
    //remove the token from local storage
    localStorage.removeItem('jwtToken');
    //remove auth header for future request
    setAuthToken(false);
    //set the current user  to {} which will set isAuth to false
    dispatch(setCurrentUser({}));
}