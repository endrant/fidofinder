import axios from 'axios';

export const userServ ={
    login, 
    logout, 
    register,
    getUser
};

function login(username, password){
    const request = {
        method: 'POST',
        body: JSON.stringify({username, password})
        };
        //connect to backend 
        return axios.get('http://localhost:8080/api/userServ/login', request)
        //.then(handleResponse) 
        .then (users => {
            localStorage.setItem('users', JSON.stringify(users));
            return users;
            });
}
    

//Delete user from local storage on logout
function logout(){
    localStorage.removeItem('users');
}
//register new user
function register(users){
    const request = {
        method: 'POST',
        body: JSON.stringify({users})
    };
    //localStorage.setItem('user', JSON.stringify(user));
    return axios.get('http://localhost:8080/api/userServ/register', request)
    .then(handleResponse)
    .then (users => {
        localStorage.setItem('users', JSON.stringify(users));
        return users;
        });
}

function getUser(){
    const request = {
        method:'GET',
        body: JSON.stringify({})
    };
     //connect to backend 
     return axios.get('http://localhost:8080/api/userServ/getUser/{username}', request)
     .then(handleResponse)
     .then (users => {
         localStorage.getItem('users', JSON.stringify(users));
         return users;
         });
 }
     

function handleResponse(response){
   
        const data = response.data;
        console.log(data);
        if(!response.ok){
            //logout on error
            if(response.status === 401){
                logout();
                }

        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
        }
        return data;
   
};