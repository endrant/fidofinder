import {alertsConst} from '../constants/alertsConst';

//manages application state for alerts
//updates state when alert action is dispatched
export function alert(state = {}, action){
    switch(action.type){
        case alertsConst.SUCCESS:
            return{
                type: 'alert-success',
                message: action.message
            };
        case alertsConst.ERROR:
            return{
                type:'alert-error',
                message: action.message
            };
        case alertsConst.CLEAR:
            return{
                type: 'alert-clear',
                message: action.message
            };
        default:
            return state
    }
}