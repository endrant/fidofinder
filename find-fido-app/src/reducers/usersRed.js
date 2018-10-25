import {userConst} from '../constants/userConst';

export function user(state = {}, action){
    switch(action.type){
        case userConst.GETUSER_REQUEST:
            return{
                loading: true
            };
        case userConst.GETUSER_SUCCESS:
            return{
                items: action.user
            };
        case userConst.GETUSER_FAIL:
            return{
                error: action.error
            };
        case userConst.DELETE_REQUEST:
            return{
                ...state, 
                items: state.items.map(user =>
                    user.id === action.id
                    ? {...user, deleting: true}
                    :user
                )
            };
        case userConst.DELETE_SUCCESS:
            return{
                items: state.items.filter(user => user.id !== action.id )
            };
        case userConst.DELETE_FAIL:
            return{
                ...state,
                items: state.items.map(user => {
                    if (user.id === action.id){
                        const {deleting, ...userCopy }=user;
                        return{
                            ...userCopy, 
                            deleteError: action.error
                        };
                    }
                    return user;
                })
            };
            default:
                return state
    }
}