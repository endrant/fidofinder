import {userConst} from '../constants/userConst';

//manage state for login logout related actions
let users = (localStorage.getItem(users));
const initialState = users ? {loggedIn: true, users} : {};

export function authentication(state = initialState, action){
    switch (action.type){
        case userConst.LOGIN_REQUEST:
            return{
                loggedIn: true,
                users:action.users
            };
        //successful login stores current user object
        //and logIn flag
        case userConst.LOGIN_SUCCESS:
            return{
                loggedIn: true, 
                users:action.users
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