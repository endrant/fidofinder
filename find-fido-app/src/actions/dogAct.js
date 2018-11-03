import {dogConst} from '../constants/dogConst';
import {dogServ} from '../api/dogServ';
import {alertsAct} from '../actions/alertsAct'; 
import history from '../helpers/history';


export const dogAct = {
    addDog,
    logout,
    getDog
};


//add dog to db
function addDog(dog){
    return dispatch => {
        dispatch(request(dog));

        dogServ.addDog(dog)
            .then(
                dog => {
                    dispatch(success(dog));
                    history.push('/getDog');
                    console.log('dog');
                    dispatch(alertsAct.success('Submission complete!'));
                },
                error => { 
                    dispatch(fail(error.toString()));
                    dispatch(alertsAct.error(error.toString()));
                }
            );
        };
        
        function request(dog){
            return{
                type: dogConst.ADDDOG_REQUEST,
                dog
            }
        }

        function success(dog){
            return{
                type: dogConst.ADDDOG_SUCCESS,
                dog            }
        }

        function fail(error) {
            return{
                type: dogConst.ADDDOG_FAIL,
                error                
            }
        }
}

   
//logout action creator
function logout(){
        dogServ.logout();
        history.push('/login');
        
        return {
             type: dogConst.LOGOUT
        };
}


//get dog action creator
function getDog(){
    //login request
    return dispatch => {
        dispatch(request({}));
        //calls async task
        dogServ.getDog()
            .then(
                dog => {
                    dispatch(success(dog));
                    history.push('/getDog');
                    console.log("dog");
                },
                error => {
                    dispatch(fail(error.toString()));
                    dispatch(alertsAct.error(error.toString()));
                }
            );
    };

    function request() { 
            return {
                 type: dogConst.GETDOG_REQUEST 
            }
        }
                 
        function success(dogs) {
             return {
                 type: dogConst.GETDOG_SUCCESS, 
                 dogs 
            } 
        }
        function fail(error) {
             return {
                 type: dogConst.GETDOG_FAIL,
                  error 
            } 
        }
    }
    
