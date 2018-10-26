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
    return axios.get('http://localhost:8080/api/userServ', request)
    //.then(handleResponse)
    .then(() => {
        const user = {
            username: 'username',
            password: '',
            firstName: 'Usre',
            lastName: 'Number Ojne',
            streetAdd: '1 Street Lane',
            city: 'Paris',
            state: 'France',
            zip: '11111',
            email: 'user@email.com',
            phone: '5554441234'
        };
        localStorage.setItem('user', JSON.stringify(user));
        return user;
    });
}
//Delete user from local storage on logout
function logout(){
    localStorage.removeItem('user');
}
//register new user
function register(user){
    const request = {
        method: 'POST',
        body: JSON.stringify({user})
    };
    localStorage.setItem('user', JSON.stringify(user));
    return axios.get('http://localhost:8080/api/userServ', request).then(handleResponse);    
}

function getUser(){
    const request = {
        method:'GET',
        body: JSON.stringify({})
    };
     //connect to backend 
     return axios.get('http://localhost:8080/api/userServ', request)
     //.then(handleResponse)
     .then(() => {
         const user = {
             username: 'username',
             password: '',
             firstName: 'Usre',
             lastName: 'Number Ojne',
             streetAdd: '1 Street Lane',
             city: 'Paris',
             state: 'France',
             zip: '11111',
             email: 'user@email.com',
             phone: '5554441234'
         };
         localStorage.setItem('user', JSON.stringify(user));
         return user;
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