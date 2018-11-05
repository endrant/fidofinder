import {userConst} from '../constants/userConst';
import {userServ} from '../api/userServ';
import {alertsAct} from './alertsAct'; 
import history from '../helpers/history';


export const userAct = {
    login, 
    logout, 
    register, 
    getUser 
};
//login action creator
function login(username, password){
    //login request
    return dispatch => {
        dispatch(request({username}));
        //calls async task
        userServ.login(username, password)
            .then(
                user => {
                    dispatch(success(user));
                    history.push('/getUser');
                },
                error => {
                    dispatch(fail(error.toString()));
                    dispatch(alertsAct.error(error.toString()));
                }
            );
    };

    function request(user) {
        return { 
        type: userConst.LOGIN_REQUEST,
        user
    };
}
    function success(user) {
        return { 
        type: userConst.LOGIN_SUCCESS,
        user
    };
}
    function fail(error) {
        return { 
        type: userConst.LOGIN_FAIL, 
        error
    };
}

}
//logout action creator
function logout(){
    history.push('/login');
    userServ.logout();
        return {
             type: userConst.LOGOUT
        };
}
//register action creator
function register(user) {
    return dispatch => {
        dispatch(request(user));

        userServ.register(user)
            .then(
                user => {
                    dispatch(success(user));
                    history.push('/getUser');
                    dispatch(alertsAct.success('Registration complete!'));
                },
                error => { 
                    dispatch(fail(error.toString()));
                    dispatch(alertsAct.error(error.toString()));
                }
            );
        };
        
        function request(user){
            return{
                type: userConst.REGISTER_REQUEST,
                user
            }
        }

        function success(user){
            return{
                type: userConst.REGISTER_SUCCESS,
                user
            }
        }

        function fail(error) {
            return{
                type: userConst.REGISTER_FAIL,
                error                
            }
        }
}

//get user action creator
function getUser(){
    return dispatch => {
        dispatch(request({}));
        //calls async task
        userServ.getUser()
            .then(user => {
                    dispatch(success(user));
                    history.push('/login');
                    console.log(user);
                },
                error => {
                    dispatch(fail(error.toString()));
                    dispatch(alertsAct.error(error.toString()));
                }
            );
    };

    function request() { 
            return {
                 type: userConst.GETUSER_REQUEST 
            }
        }
                 
        function success(user) {
             return {
                 type: userConst.GETUSER_SUCCESS, 
                 user
            } 
        }
        function fail(error) {
             return {
                 type: userConst.GETUSER_FAIL,
                  error 
            } 
        }
    }
    
