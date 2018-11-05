import {dogConst} from '../constants/dogConst';

export function dogs(state = {}, action){
    switch(action.type){
        case dogConst.GETDOG_REQUEST:
            return{
                loading: true
            };
        case dogConst.GETDOG_SUCCESS:
            return{
                items: action.dogs
            };
        case dogConst.GETDOG_FAIL:
            return{
                error: action.error
            };
        default:
                return state
    }
}