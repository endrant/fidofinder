import {userConst} from '../constants/userConst';

export function registration(state={}, action){
    switch (action.type){
        //set registering flag 
        case userConst.REGISTER_REQUEST:
            return{
                registering: true
            };
        //clears state
        case userConst.REGISTER_SUCCESS:
            return{state};
        //clears state
        case userConst.REGISTER_FAIL:
            return{};
        default:
            return state
    }
}
