import {alertsConst} from '../constants/alertsConst';


export const alertsAct = {
    success,
    error, 
    clear
};
//success alert
function success(message) {
    return {
        type: alertsConst.SUCCESS, 
        message
    };
}
//error alert
function error(message) {
    return {
        type: alertsConst.ERROR,
        message
    };
}
//clear alert
function clear(){
    return {
        type: alertsConst.CLEAR
    };
}
