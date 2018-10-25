import {userConst} from '../constants/userConst';

//manage state for login logout related actions
let user = JSON.parse(localStorage.getItem(user));
const initialState = user ? {logIn: true, user} : {};

export function authentication(state = initialState, action){
    switch (action.type){
        case userConst.LOGIN_REQUEST:
            return{
                loggedIn: true,
                user:action.user
            };
        //successful login stores current user object
        //and logIn flag
        case userConst.LOGIN_SUCCESS:
            return{
                loggedIn: true, 
                user:action.user
            };
        //empties object on login failure
        case userConst.LOGIN_FAIL:
            return{};
        //empties object at logout
        case userConst.LOGOUT:
            return{};
        default:
            return state
    }
}