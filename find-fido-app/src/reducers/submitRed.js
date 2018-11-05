import {dogConst} from '../constants/dogConst';

export function submitForm(state={}, action){
    switch (action.type){
        //set submitting flag 
        case dogConst.ADDDOG_REQUEST:
            return{
                submittingForm: true
            };
        //clears state
        case dogConst.ADDDOG_SUCCESS:
            return{state};
        //clears state
        case dogConst.ADDDOG_FAIL:
            return{};
        default:
            return state
    }
}
